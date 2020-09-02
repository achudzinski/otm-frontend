module.exports = {

    // resolves from test to snapshot path
    resolveSnapshotPath: (testPath, snapshotExtension) => {
        const absolutePrefix = process.cwd() + "/";
        return 'snapshots/' + testPath.replace(absolutePrefix, "") + snapshotExtension;
    },

    // resolves from snapshot to test path
    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        console.log(snapshotFilePath);
        return snapshotFilePath
            .replace('snapshots/', '')
            .slice(0, -snapshotExtension.length);
    },

    // Example test path, used for preflight consistency check of the implementation above
    testPathForConsistencyCheck: 'src/some/example.test.js'
};