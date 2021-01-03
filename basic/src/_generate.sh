#!/bin/bash

# create script tag files to concat with plain JS in _style.js
echo "<script>" > temp1.txt
echo "</script>" > temp2.txt

# for each file in both basic folders...
for f in en-jap/* jap-en/*;
do
    # set output name to output dir + filename, and create the file / clear contents
    output="../output/$f"
    mkdir -p $(dirname $output)
    touch $output
    > $output

    # concatenate file, style tags, and style script; remove temp files
    cat $f temp1.txt _style.js temp2.txt >> $output
done
rm temp1.txt
rm temp2.txt
