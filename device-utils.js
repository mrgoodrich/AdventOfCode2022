function parseCommands(fullOutput) {
  let commands = [];
  for (let ndx = 0; ndx < fullOutput.length; ndx++) {
    let prompt = fullOutput[ndx].split(' ');
    let output = [];
    while (ndx < fullOutput.length - 1 && !fullOutput[ndx + 1].startsWith('$')) {
      ndx++;
      output.push(fullOutput[ndx].split(' '));
    }
    commands.push(new Command(prompt[1], prompt.slice(2), output));
  }
  return commands;
}

function getDirectorySize(directory) {
  let bytes = 0;
  for (const [key, value] of directory.entries()) {
    if (key === '..') {
      // break;
    } else {
      if (value instanceof Map) {
        bytes += getDirectorySize(value);
      } else {
        bytes += parseInt(value);
      }
    }
  }
  return bytes;
}

function runComputer(commands) {
  for (let command of commands) {
    computer[command.cmd](command);
  }
}
