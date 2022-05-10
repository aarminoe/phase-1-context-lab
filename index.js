/* Your Code Here */

function createEmployeeRecord(empArray) {
    return {
        'firstName':  empArray[0],
        'familyName': empArray[1],
        'title': empArray[2],
        'payPerHour': parseInt(empArray[3]),
        'timeInEvents': [],
        'timeOutEvents': [],
    }
}

function createEmployeeRecords (empArray) {
    let arrayOfRecords = []
    empArray.forEach(array => {
        let empObj = createEmployeeRecord(array)
        arrayOfRecords.push(empObj)
    })
    return arrayOfRecords
}

function createTimeInEvent(dateStamp) {
    let [date,hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        'type': 'TimeIn',
        'hour': parseInt(hour),
        'date': date
    })
    return this  
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        'type': 'TimeOut',
        'hour': parseInt(hour),
        'date': date
    })
    return this
}

function hoursWorkedOnDate(dateStamp){
    let timeInKeys = this.timeInEvents.find((e) => {
        return e.date === dateStamp
    })
    let timeOutKeys = this.timeOutEvents.find((e => {
        return e.date === dateStamp
    }))
    return (timeOutKeys.hour - timeInKeys.hour) /100
}

function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((array) => {
        if (array.firstName === firstName) {
            return array
        }
        else {
            return undefined
        }
    })
}

function calculatePayroll(empArray) {
    let totalTime = 0
    empArray.forEach(empRecord => {
        totalTime += allWagesFor.call(empRecord)
    })
    return totalTime
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

