---
title: Java IO
---

# `InputStream`

stream是指字节流

`InputStream` 核心方法：`int read()` 读取下一个字节

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
