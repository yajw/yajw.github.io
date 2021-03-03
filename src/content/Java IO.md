---
title: Java IO
---

# InputStream

stream是指字节流

`InputStream` 核心方法：`int read()` 读取下一个字节


## FileInputStream
例如通过`FileInputStream`读取text文件的过程是，打开一个文件，返回一个字节流，这个字节流可以append到`StringBuilder`，`StringBuilder`会按照charset返回一个String对象。

apache commons-io的实现：
```
    public static String toString(final InputStream input, final Charset charset) throws IOException {
        try (final StringBuilderWriter sw = new StringBuilderWriter()) {
            copy(input, sw, charset);
            return sw.toString();
        }
    }

...

    public static long copyLarge(final Reader reader, final Writer writer, final char[] buffer) throws IOException {
        long count = 0;
        int n;
        while (EOF != (n = reader.read(buffer))) {
            writer.write(buffer, 0, n);
            count += n;
        }
        return count;
    }
```
`StringBuilderWriter`是对StringBuilder的封装.


## BufferedFileInputStream

核心功能：读缓冲，每次读固定8M的字节数，用一个自动扩容的byte[]来保存当前读到的所有字节，如果已经读到了就直接返回。这种方法减少io次数（底层系统调用）。

jdk的一个可以CAS替换某个对象Field的工具: `class AtomicReferenceFieldUpdater<T,V> `
```
    private static final
        AtomicReferenceFieldUpdater<BufferedInputStream, byte[]> bufUpdater =
        AtomicReferenceFieldUpdater.newUpdater
        (BufferedInputStream.class,  byte[].class, "buf");
...
        !bufUpdater.compareAndSet(this, buffer, nbuf)
```
原理：计算对应field的地址然后替换。
