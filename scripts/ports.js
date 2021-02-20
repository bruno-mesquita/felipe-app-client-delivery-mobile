const { execSync } = require('child_process'); // eslint-disable-line

execSync('adb reverse tcp:9090 tcp:9090');
