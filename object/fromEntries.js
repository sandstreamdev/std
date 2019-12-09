const fromEntries = keyValuePairs =>
keyValuePairs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export default Object.fromEntries || fromEntries;
