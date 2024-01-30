const lowerBackMale = [
    {
        min: 43.8,
        max: 46.7,
        nums: [171, 216, 260, 305, 349, 394, 438, 483, 527]
    },
    {
        min: 46.8,
        max: 48.7,
        nums: [197, 236, 274, 313, 351, 390, 428, 467, 505]
    },
    {
        min: 48.8,
        max: 51.2,
        nums: [219, 258, 296, 335, 373, 412, 450, 489, 527]
    },
    {
        min: 51.3,
        max: 53.6,
        nums: [220, 261, 303, 344, 385, 426, 468, 509, 550]
    },
    {
        min: 53.7,
        max: 56.2,
        nums: [233, 272, 310, 349, 387, 425, 463, 500, 538]
    },
    {
        min: 56.3,
        max: 58.7,
        nums: [226, 266, 306, 346, 386, 426, 466, 506, 546]
    },
    {
        min: 58.8,
        max: 61.2,
        nums: [232, 268, 304, 339, 375, 436, 496, 557, 617]
    }
]
const lowerBackFemale = [
    {
        min: 43.8,
        max: 46.7,
        nums: [214, 250, 287, 323, 359, 395, 432, 468, 504]
    },
    {
        min: 46.8,
        max: 48.7,
        nums: [213, 249, 284, 320, 355, 391, 426, 462, 497]
    },
    {
        min: 48.8,
        max: 51.2,
        nums: [215, 254, 293, 331, 370, 409, 449, 488, 527]
    },
    {
        min: 51.3,
        max: 53.6,
        nums: [205, 249, 294, 338, 382, 426, 471, 515, 559]
    },
    {
        min: 53.7,
        max: 56.2,
        nums: [244, 284, 324, 363, 403, 443, 483, 522, 562]
    },
    {
        min: 56.3,
        max: 58.7,
        nums: [261, 300, 339, 378, 417, 456, 495, 534, 573]
    },
    {
        min: 58.8,
        max: 61.2,
        nums: [257, 304, 352, 399, 446, 484, 523, 561, 599]
    }
]

const neckMale = [
    {
        min: 43.8,
        max: 46.7,
        nums: [202, 232, 262, 291, 321, 352, 384, 415, 446]
    },
    {
        min: 46.8,
        max: 48.7,
        nums: [212, 240, 269, 297, 325, 365, 405, 444, 484]
    },
    {
        min: 48.8,
        max: 51.2,
        nums: [231, 260, 290, 319, 348, 382, 416, 449, 483]
    },
    {
        min: 51.3,
        max: 53.6,
        nums: [225, 258, 291, 324, 357, 392, 428, 463, 498]
    },
    {
        min: 53.7,
        max: 56.2,
        nums: [234, 266, 297, 329, 360, 400, 439, 479, 518]
    },
    {
        min: 56.3,
        max: 58.7,
        nums: [249, 281, 313, 344, 376, 418, 461, 503, 545]
    },
    {
        min: 58.8,
        max: 61.2,
        nums: [234, 275, 316, 356, 397, 448, 499, 549, 600]
    }
]
const neckFemale = [
    {
        min: 43.8,
        max: 46.7,
        nums: [184, 222, 260, 298, 336, 378, 420, 462, 504]
    },
    {
        min: 46.8,
        max: 48.7,
        nums: [213, 244, 274, 305, 335, 376, 416, 457, 497]
    },
    {
        min: 48.8,
        max: 51.2,
        nums: [227, 257, 287, 316, 346, 391, 437, 482, 527]
    },
    {
        min: 51.3,
        max: 53.6,
        nums: [239, 266, 292, 319, 345, 399, 452, 506, 559]
    },
    {
        min: 53.7,
        max: 56.2,
        nums: [231, 263, 295, 327, 359, 410, 461, 511, 562]
    },
    {
        min: 56.3,
        max: 58.7,
        nums: [234, 268, 302, 335, 369, 420, 471, 522, 573]
    },
    {
        min: 58.8,
        max: 61.2,
        nums: [253, 285, 317, 349, 381, 436, 490, 545, 599]
    }
]


function validation(values, tableLowerBack, tableNeck) {
    let index = 0

    if (values[0] < tableLowerBack[0].min) {
        values[0] = tableLowerBack[0].min
    }

    if (values[0] > tableLowerBack[tableLowerBack.length - 1].max) {
        values[0] = tableLowerBack[tableLowerBack.length - 1].max
    }


    for (i = 0; i < tableLowerBack.length; i++) {
        if ((values[0] >= tableLowerBack[i].min) && (values[0] <= tableLowerBack[i].max)) {
            index = i
        }
    }

    if (isNaN(values[1])) {
        alert("Некорректные значения для длины поясницы")
        return false
    }

    if (values[1] < tableLowerBack[index].nums[0]) {
        values[1] = tableLowerBack[index].nums[0]
    }

    if (values[1] > tableLowerBack[index].nums[tableLowerBack[index].nums.length - 1]) {
        values[1] = tableLowerBack[index].nums[tableLowerBack[index].nums.length - 1]
    }

    if (isNaN(values[2])) {
        alert("Некорректные значения для длины шеи")
        return false
    }

    if (values[2] < tableNeck[index].nums[0]) {
        values[2] = tableNeck[index].nums[0]
    }

    if (values[2] > tableNeck[index].nums[tableNeck[index].nums.length - 1]) {
        values[2] = tableNeck[index].nums[tableNeck[index].nums.length - 1]
    }

    if ((values[3] <= 0) || (isNaN(values[3]))) {
        alert("Некорректные значения для передней дуги")
        return false
    }

    if ((values[4] <= 0) || (isNaN(values[4]))) {
        alert("Некорректные значения для задней дуги")
        return false
    }

    return true
}

function getGenderValue() {
    const gender = document.getElementsByName("gender")

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value
        }
    }
}

function lowerbackCount(table, spine, value) {
    for (i = 0; i < table.length; i++) {
        if (spine < table[i].min || spine > table[i].max) {
            continue
        }

        for (j = 0; j < table[i].nums.length; j++) {
            if (table[i].nums[j] >= value) {
                if (j == 0) {
                    return -1
                }

                if (table[i].nums[j] - value <= value - table[i].nums[j - 1]) {
                    if (j <= Math.floor(table[i].nums.length / 2)) {
                        return -(j + 1)
                    }

                    return (table[i].nums.length - j)
                }

                if (j <= Math.floor(table[i].nums.length / 2)) {
                    return -j
                }

                return table[i].nums.length - (j - 1)
            }
        }
    }
}



function diagnosisCount(values) {
    const gender = getGenderValue()
    document.getElementById("lowerBackDiagnosis").innerHTML = "Норма"
    document.getElementById("neckDiagnosis").innerHTML = "Норма"

    lowerBackData = lowerBackMale
    neckData = neckMale


    if (gender == "female") {
        lowerBackData = lowerBackFemale
        neckData = neckFemale
    }

    lowerBackValue = lowerbackCount(lowerBackData, values[0], values[1])
    neckValue = lowerbackCount(neckData, values[0], values[2])

    document.getElementById("lowerBack").innerHTML = Math.abs(lowerBackValue)
    document.getElementById("neck").innerHTML = Math.abs(neckValue)

    if (lowerBackValue > -3 && lowerBackValue <= -1) {
        document.getElementById("lowerBackDiagnosis").innerHTML = "Кифоз"
    } else if (lowerBackValue >= 1 && lowerBackValue < 3) {
        document.getElementById("lowerBackDiagnosis").innerHTML = "Лордоз"
    } else if (Math.abs(lowerBackValue) >= 3) {
        document.getElementById("neckDiagnosis").innerHTML = "Норма"
    }

    if (neckValue > -3 && neckValue <= -1) {
        document.getElementById("neckDiagnosis").innerHTML = "Кифоз"
    } else if (neckValue >= 1 && neckValue < 3) {
        document.getElementById("neckDiagnosis").innerHTML = "Лордоз"
    } else if (Math.abs(neckValue) >= 3) {
        document.getElementById("neckDiagnosis").innerHTML = "Норма"
    }

}

function shoulderIndex(frontArc, backArc) {
    return (backArc / frontArc) * 100
}

function postureCount() {
    lowerBack = document.getElementById("lowerBackDiagnosis").innerHTML
    neck = document.getElementById("neckDiagnosis").innerHTML

    if (lowerBack == "Норма" && neck == "Норма") {
        return "Правильная осанка"
    } else if ((lowerBack == "Кифоз" && neck == "Лордоз") || (lowerBack == "Норма" && neck == "Лордоз")) {
        return "Сутуловатая осанка"
    } else if ((lowerBack == "Лордоз" && neck == "Кифоз") || (lowerBack == "Лордоз" && neck == "Норма")) {
        return "Лордотическая осанка"
    } else if ((lowerBack == "Кифоз" && neck == "Кифоз") || (lowerBack == "Норма" && neck == "Кифоз") || (lowerBack == "Кифоз" && neck == "Норма")) {
        return "Выпрямленная осанка"
    } else if (lowerBack == "Лордоз" && neck == "Лордоз") {
        return "Кифотическая осанка"
    }

    return ""
}

function clearResultFields() {
    document.getElementById("shoulderIndex").innerHTML = ""
    document.getElementById("diagnosis").innerHTML = ""
    document.getElementById("lowerBack").innerHTML = ""
    document.getElementById("neck").innerHTML = ""
    document.getElementById("lowerBackDiagnosis").innerHTML = ""
    document.getElementById("neckDiagnosis").innerHTML = ""
}

function handler() {
    let flag = true

    const stats = document.getElementsByClassName("stats-input")
    const values = new Array(stats.length)

    for (i = 0; i < stats.length; i++) {
        values[i] = stats[i].value

        if (i != 0) {
            values[i] = parseFloat(values[i]) * 100
        }
    }

    const gender = document.getElementsByName("gender")
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            flag = true
            break
        }

        flag = false
    }

    if (!flag) {
        alert("Не выбран пол")
        clearResultFields()

        return
    }

    if (getGenderValue() == "male") {
        flag = validation(values, lowerBackMale, neckMale)
    }

    if (getGenderValue() == "female") {
        flag = validation(values, lowerBackFemale, neckFemale)
    }

    if (flag) {
        diagnosisCount(values)
        document.getElementById("shoulderIndex").innerHTML = Math.round(shoulderIndex(values[3], values[4]))
        document.getElementById("diagnosis").innerHTML = postureCount()
    }
}

const btn = document.getElementById("counted-stats__button").onclick = handler;