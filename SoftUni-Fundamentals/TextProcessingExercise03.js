function ExtractFile(File) {
    let FileToSplit = File.split("\\");
    let FileNameWithExtension = FileToSplit.pop();

    let LastDotIndex = FileNameWithExtension.lastIndexOf(".");

    if (LastDotIndex !== -1) {
        let FileName = FileNameWithExtension.slice(0, LastDotIndex);
        let FileExtension = FileNameWithExtension.slice(LastDotIndex + 1);

        console.log(`File name: ${FileName}`);
        console.log(`File extension: ${FileExtension}`);
    } else {
        console.log("Invalid file path");
    }
}