#!/bin/bash

# The type generation issue for internal functions was resolved by removing redundant declarations 
# using a custom bash script that moves the target file to the root and deletes all other files and folders. 
# While this solution is effective for quickly fixing the issue, it is a temporary and sloppy approach. 
# Ideally, you should configure your build process via Webpack to manage types and exports correctly, 
# minimizing the need for such manual interventions. 
#
# This will ensure stability and transparency of the development process in the long term.

root_dir="./build/types/"
target_file="json2html.d.ts"

# Go to the root directory
cd "$root_dir" || exit

# Ищем целевой файл в подкаталогах
found_file=$(find . -type f -name "$target_file" | head -n 1)

# If file found
if [[ -n "$found_file" ]]; then
  # Move it to the root
  mv "$found_file" .

  # Delete all nested folders and files
  find . -type d -not -path . -exec rm -rf {} +

  echo "[Cleanup log]: The file '$target_file' was moved to the '$root_dir', and all other types files and folders were deleted."
else
  echo "[Cleanup log]: The target file '$target_file' was not found."
fi
