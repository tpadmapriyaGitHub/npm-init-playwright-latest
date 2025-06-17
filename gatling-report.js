var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "525",
        "ok": "105",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "142",
        "ok": "432",
        "ko": "142"
    },
    "maxResponseTime": {
        "total": "554",
        "ok": "554",
        "ko": "182"
    },
    "meanResponseTime": {
        "total": "210",
        "ok": "457",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "32",
        "ko": "5"
    },
    "percentiles1": {
        "total": "148",
        "ok": "448",
        "ko": "147"
    },
    "percentiles2": {
        "total": "155",
        "ok": "453",
        "ko": "149"
    },
    "percentiles3": {
        "total": "453",
        "ok": "550",
        "ko": "158"
    },
    "percentiles4": {
        "total": "550",
        "ok": "554",
        "ko": "167"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 105,
    "percentage": 20
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 420,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.192",
        "ok": "4.038",
        "ko": "16.154"
    }
},
contents: {
"req_get-posts-33bed": {
        type: "REQUEST",
        name: "GET Posts",
path: "GET Posts",
pathFormatted: "req_get-posts-33bed",
stats: {
    "name": "GET Posts",
    "numberOfRequests": {
        "total": "525",
        "ok": "105",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "142",
        "ok": "432",
        "ko": "142"
    },
    "maxResponseTime": {
        "total": "554",
        "ok": "554",
        "ko": "182"
    },
    "meanResponseTime": {
        "total": "210",
        "ok": "457",
        "ko": "148"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "32",
        "ko": "5"
    },
    "percentiles1": {
        "total": "148",
        "ok": "448",
        "ko": "147"
    },
    "percentiles2": {
        "total": "155",
        "ok": "453",
        "ko": "149"
    },
    "percentiles3": {
        "total": "453",
        "ok": "550",
        "ko": "158"
    },
    "percentiles4": {
        "total": "550",
        "ok": "554",
        "ko": "167"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 105,
    "percentage": 20
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 420,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.192",
        "ok": "4.038",
        "ko": "16.154"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
