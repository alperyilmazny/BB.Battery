var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        // Add event listeners
        window.addEventListener("batterystatus", this.onBatteryStatus, false);
    },
    
    onBatteryStatus: function (status) {
        var batteryLevel = (status && status.level) ? status.level : 0;
        var isBatteryPlugged = (status && status.isPlugged) ? status.isPlugged : false;
        
        var className = calculateBatterySpanClassName(batteryLevel);
        
        document.getElementById("batterySpan").className = className;
        document.getElementById("batteryPercent").innerHTML = status.level + " %";
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};

function  calculateBatterySpanClassName(level) {
    if (level >= 75 && level < 100) return "battery level-75";
    if (level >= 50 && level < 75) return "battery level-50";
    if (level >= 25 && level < 50) return "battery level-25";
    if (level >= 0 && level < 25) return "battery level-0";
    return "battery level-0";
};
