const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    //baseUrl: 'http://localhost',
    //port: 4723,
    //path: '/wd/hub',
    user: "llpupp_YbFC1h",
    key: "TZBKpsZUR66dHYzD2vu6",
    //services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        //"platformName": "Android",
        //"platformVersion": "9.0",
        //"deviceName": "ebac-qe1",
        //"automationName": "UiAutomator2",
        //"app": join(process.cwd(), ('./app/android/ebac-qe1.apk')),
        //"appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'

        'app' : 'bs://d07d9f24d467664d6afa55771389166e1cd9d3ae',
        'device' : 'Samsung Galaxy Note 20',
        'os_version' : '10.0',
        'project' : 'Meu primeiro projeto em Device Farm',
        'build' : 'browserstack-build-2',
        'name': 'teste_login'

    }],
    waitForTimeout: 50000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot()
    }
}


