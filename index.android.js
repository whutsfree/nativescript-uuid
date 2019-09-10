var platform = require('tns-core-modules/platform/platform');

function getUUID() {
  return platform ? platform.device.uuid : null;
}

exports.getUUID = getUUID;
