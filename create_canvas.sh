#!/bin/bash

# Converts frames to a 3 second video and concats the reversed video.
# Outputs one for Spotify Canvas and one for Twitter
# ./create_canvas.sh oceanside_a ~/Downloads/frames ~/Downloads/output

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

# cut that video to the first 3 seconds
ffmpeg -i $temp_dir/output.mp4 -ss 00:00:00 -t 00:00:03 -async 1 $temp_dir/cut.mp4

# reverse the shortened video
ffmpeg -i $temp_dir/cut.mp4 -vf reverse $temp_dir/reversed.mp4

# join the cut to the reverse for a 6 second loop, canvas ready
ffmpeg -i $temp_dir/cut.mp4 -i $temp_dir/reversed.mp4 -aspect 9/16 -filter_complex "concat=n=2:v=1:a=0" -f MP4 -an -y $output_dir/${name}_canvas.mp4

# -pix_fmt yuv420p required for twitter upload
ffmpeg -i $output_dir/${name}_canvas.mp4 -pix_fmt yuv420p $output_dir/${name}_tweet.mp4


# cleanup the temp files
rm -r $temp_dir/

#### Additional Notes
##  if you wantt o crop the video to a square or something
# ffmpeg -i in.mp4 -filter:v "crop=out_w:out_h:x:y" out.mp4
# ffmpeg -i final.mp4 -vcodec libx264 -filter:v "crop=1080:1080:0:0" final_crop.mp4
## gif if necessary
# ffmpeg -i output.mp4 output.gif