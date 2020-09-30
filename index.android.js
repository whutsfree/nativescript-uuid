var platform = require('@nativescript/core/platform');

function getUUID() {
  return platform ? platform.Device.uuid : null;
}

exports.getUUID = getUUID;
