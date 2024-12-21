from pathlib import Path
import argparse
import os

def combine_files(input_directory, output_file):
    """
    Combines all files in the input directory and its subdirectories into a single output file.
    Uses Path objects for better Windows compatibility.
    
    Args:
        input_directory: Path object for input directory
        output_file: Path object for output file
    """
    try:
        # Convert to Path objects and resolve to absolute paths
        input_directory = Path(input_directory).resolve()
        output_file = Path(output_file).resolve()
        
        # Check if input directory exists
        if not input_directory.exists():
            print(f"Error: Input directory '{input_directory}' does not exist")
            return
        
        # Create output directory if it doesn't exist
        output_file.parent.mkdir(parents=True, exist_ok=True)
        print(f"Created/verified output directory: {output_file.parent}")
            
        # Count files for progress tracking
        total_files = sum(1 for _ in input_directory.rglob('*') if _.is_file())
        processed_files = 0
        
        print(f"\nFound {total_files} files to process")
        print(f"Writing to output file: {output_file}\n")
        
        with output_file.open('w', encoding='utf-8') as outfile:
            # Process all files in directory and subdirectories
            for file_path in sorted(input_directory.rglob('*')):
                if not file_path.is_file():
                    continue
                    
                # Skip the output file itself
                if file_path.resolve() == output_file.resolve():
                    continue
                    
                try:
                    # Get relative path
                    rel_path = file_path.parent.relative_to(input_directory)
                    
                    # Write headers
                    if str(rel_path) != '.':
                        outfile.write(f"\n{'#'*80}\nFolder: {rel_path}\n{'#'*80}\n")
                    
                    outfile.write(f"\n{'='*80}\n")
                    if str(rel_path) == '.':
                        outfile.write(f"File: {file_path.name}\n")
                    else:
                        outfile.write(f"File: {rel_path / file_path.name}\n")
                    outfile.write(f"{'='*80}\n\n")
                    
                    # Read and write content
                    content = file_path.read_text(encoding='utf-8')
                    outfile.write(content)
                    outfile.write('\n')
                        
                    processed_files += 1
                    print(f"Processed {processed_files}/{total_files}: {file_path.relative_to(input_directory)}")
                        
                except Exception as e:
                    print(f"Error processing {file_path}: {str(e)}")
                    
        if processed_files > 0:
            print(f"\nSuccessfully combined {processed_files} files into {output_file}")
        else:
            print("No files were processed")
        
    except Exception as e:
        print(f"Error: {str(e)}")

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(
        description='Combine files from a directory into a single output file.',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    # Add arguments
    parser.add_argument(
        'input_dir',
        help='Path to the input directory containing files to combine'
    )
    parser.add_argument(
        '-o', '--output',
        help='Path to the output file (default: combined_files.txt in a combined_output folder next to input)',
        default=None
    )
    
    # Parse arguments
    args = parser.parse_args()
    
    # Convert input path to Path object
    input_dir = Path(args.input_dir)
    
    # If output not specified, create default output path
    if args.output is None:
        output_dir = input_dir.parent / "combined_output"
        output_file = output_dir / "combined_files.txt"
    else:
        output_file = Path(args.output)
    
    print(f"Input directory: {input_dir}")
    print(f"Output file: {output_file}")
    
    # Run the combine operation
    combine_files(input_dir, output_file)

if __name__ == "__main__":
    main()