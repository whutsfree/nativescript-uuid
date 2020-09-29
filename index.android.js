var platform = require('@nativescript/core/platform/platform');

function getUUID() {
  return platform ? platform.device.uuid : null;
}

exports.getUUID = getUUID;
