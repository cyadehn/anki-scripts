#!/bin/bash

echo "<string>" > temp1.txt
echo "</string>" > temp2.txt
for f in en-jap/* jap-en/*;
do
    output="output/$f"
    mkdir -p $(dirname $output)
    touch $output
    > $output

    cat temp1.txt _style.js temp2.txt >> $output
done
rm temp1.txt
rm temp2.txt
