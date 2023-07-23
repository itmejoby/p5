#!/bin/bash

# Converts frames to a video
# ./join_frames.sh oceanside_a ~/Downloads/frames ~/Downloads/output

# arguments
name=$1 # filename prefix
input_dir=$2 # location of the frames
output_dir=$3 # output location


# create output and temp directories
mkdir $output_dir
mkdir $output_dir/temp/
temp_dir=$output_dir/temp


# join all the frames in $input_dir into one video
ffmpeg -f image2 -pattern_type glob -i "$input_dir/*.png" $temp_dir/output.mp4

# formatting
ffmpeg -i $temp_dir/output.mp4 -aspect 9/16 -f MP4 -an -y $output_dir/${name}_final.mp4

# cleanup the temp files
rm -r $temp_dir/

#### Additional Notes
##  if you wantt o crop the video to a square or something
# ffmpeg -i in.mp4 -filter:v "crop=out_w:out_h:x:y" out.mp4
# ffmpeg -i final.mp4 -vcodec libx264 -filter:v "crop=1080:1080:0:0" final_crop.mp4
## gif if necessary
# ffmpeg -i output.mp4 output.gif