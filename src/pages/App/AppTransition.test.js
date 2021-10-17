const rewire = require("rewire")
const AppTransition = rewire("./AppTransition")
const getHomeTimeline = AppTransition.__get__("getHomeTimeline")
const getDefaultTimeline = AppTransition.__get__("getDefaultTimeline")
const getDefaultTimelineOff = AppTransition.__get__("getDefaultTimelineOff")
// @ponicode
describe("AppTransition.play", () => {
    test("0", () => {
        let callFunction = () => {
            AppTransition.play("/", 9876, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            AppTransition.play(-1, "c466a48309794261b64a4f02cfcc3d64", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            AppTransition.play(-1, "c466a48309794261b64a4f02cfcc3d64", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            AppTransition.play("/", 9876, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            AppTransition.play(-10, 9876, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            AppTransition.play(Infinity, "", false)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("AppTransition.playOff", () => {
    test("0", () => {
        let callFunction = () => {
            AppTransition.playOff(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            AppTransition.playOff("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            AppTransition.playOff("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            AppTransition.playOff("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            AppTransition.playOff(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            AppTransition.playOff(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getHomeTimeline", () => {
    test("0", () => {
        let callFunction = () => {
            getHomeTimeline(false, 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getHomeTimeline(true, 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getHomeTimeline(false, 0.0005)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getHomeTimeline(true, 15)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getHomeTimeline(true, 150)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getHomeTimeline(undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getDefaultTimeline", () => {
    test("0", () => {
        let callFunction = () => {
            getDefaultTimeline(true, 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getDefaultTimeline(true, 0.0001)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getDefaultTimeline(false, 1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getDefaultTimeline(false, 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getDefaultTimeline(true, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getDefaultTimeline(true, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getDefaultTimelineOff", () => {
    test("0", () => {
        let callFunction = () => {
            getDefaultTimelineOff(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getDefaultTimelineOff(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getDefaultTimelineOff(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
