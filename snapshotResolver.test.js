const snapshotResolver = require("./snapshotResolver")
// @ponicode
describe("snapshotResolver.resolveSnapshotPath", () => {
    test("0", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("Jean-Philippe", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("Pierre Edouard", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("Jean-Philippe", "mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("Michael", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("Pierre Edouard", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            snapshotResolver.resolveSnapshotPath("", NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("snapshotResolver.resolveTestPath", () => {
    test("0", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("/var/up_pink.stl.atx", { length: 16 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("/etc/ppp/pre_emptive_manager.efif.bcpio", { length: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("/var/up_pink.stl.atxsnapshots//var/up_pink.stl.atx", { length: 32 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("snapshots/", { length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("snapshots/", { length: 64 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            snapshotResolver.resolveTestPath("", { length: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
