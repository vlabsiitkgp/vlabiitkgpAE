jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                //var id = el.getAttribute("id");
                //instance.animate(el, {left: l, top: t}, { duration: 350, easing: 'easeOutBack' });
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "#0D87A2" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint);
					},

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: 10 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("bd1"),            
            e2 = prepare("bd2"),
			 e3 = prepare("bd3"),
            e4 = prepare("bd4"),
			e5 = prepare("bd5"),
			e6 = prepare("bd6"),
            e7 = prepare("bd7"),
			e8 = prepare("bd8"),
			e9 = prepare("bd9"),
            e10 = prepare("bd10"),
			
			e11 = prepare("bd11"),            
            e12 = prepare("bd12"),
			 e13 = prepare("bd13"),
            e14 = prepare("bd14"),
			e15 = prepare("bd15"),
			e16 = prepare("bd16"),
            e17 = prepare("bd17"),
			e18 = prepare("bd18"),			
			
			
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        /*instance.on(clearBtn, "click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.detachEveryConnection();
        });*/
		
		

       
    });

   // jsPlumb.fire("jsPlumbDemoLoaded", instance);


 //jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

      
        var correct_connections_1_2 = [
            {
                "source": "bd1",
                "target": "bd2"
            },

            {
                "source": "bd2",
                "target": "bd1"
            }
        ];

        var correct_connections_3_4 = [
            {
                "source": "bd3",
                "target": "bd4"
            },

            {
                "source": "bd4",
                "target": "bd3"
            }
        ];        

        var correct_connections_5_6 = [
            {
                "source": "bd5",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd5"
            }
        ];

        var correct_connections_6_7 = [
            {
                "source": "bd6",
                "target": "bd7"
            },

            {
                "source": "bd7",
                "target": "bd6"
            }
        ];

        
        var correct_connections_8_9 = [
            {
                "source": "bd8",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd8"
            }
        ];

        var correct_connections_10_11= [
            {
                "source": "bd10",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd10"
            }
        ];
		var correct_connections_10_12= [
            {
                "source": "bd10",
                "target": "bd12"
            },

            {
                "source": "bd12",
                "target": "bd10"
            }
        ];
		
		var correct_connections_9_13= [
            {
                "source": "bd9",
                "target": "bd13"
            },

            {
                "source": "bd13",
                "target": "bd9"
            }
        ];
		
		var correct_connections_14_17= [
            {
                "source": "bd14",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd14"
            }
        ];
		var correct_connections_17_18= [
            {
                "source": "bd17",
                "target": "bd18"
            },

            {
                "source": "bd18",
                "target": "bd17"
            }
        ];
		
		var correct_connections_16_17= [
            {
                "source": "bd16",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd16"
            }
        ];
		
		var correct_connections_3_15= [
            {
                "source": "bd3",
                "target": "bd15"
            },

            {
                "source": "bd15",
                "target": "bd3"
            }
        ];
		
		
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "bd1",
                "target": "bd2"
            },
    
            {
                "source": "bd2",
                "target": "bd1"
            },
            
            {
                "source": "bd3",
                "target": "bd4"
            },

            {
                "source": "bd4",
                "target": "bd3"
            },

            {
                "source": "bd5",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd5"
            },
			
			{
                "source": "bd6",
                "target": "bd7"
            },

            {
                "source": "bd7",
                "target": "bd6"
            },
			
            {
                "source": "bd8",
                "target": "bd9"
            },

            {
                "source": "bd9",
                "target": "bd8"
            },
			 {
                "source": "bd10",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd10"
            },
			{
                "source": "bd10",
                "target": "bd12"
            },

            {
                "source": "bd12",
                "target": "bd10"
            },
			{
                "source": "bd9",
                "target": "bd13"
            },

            {
                "source": "bd13",
                "target": "bd9"
            },
			
			{
                "source": "bd14",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd14"
            },
			
			{
                "source": "bd17",
                "target": "bd18"
            },

            {
                "source": "bd18",
                "target": "bd17"
            },
			
			{
                "source": "bd16",
                "target": "bd17"
            },

            {
                "source": "bd17",
                "target": "bd16"
            },
			 {
                "source": "bd3",
                "target": "bd15"
            },

            {
                "source": "bd15",
                "target": "bd3"
            },
			
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_2 = false;
        var is_connected_3_4 = false;
        var is_connected_5_6 = false;
        var is_connected_6_7 = false;
        var is_connected_8_9 = false;
        var is_connected_10_11 = false;
		 var is_connected_10_12 = false;
		 var is_connected_9_13 = false;
		 var is_connected_14_17 = false;
		 var is_connected_17_18 = false;
		 var is_connected_16_17 = false;
		 var is_connected_3_15 = false;		
		
       
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_2){
                is_connected_1_2 = correct_connections_1_2.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 3_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_3_4){
                is_connected_3_4 = correct_connections_3_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_6){
                is_connected_5_6 = correct_connections_5_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_7){
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_9){
                is_connected_8_9 = correct_connections_8_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_11){
                is_connected_10_11 = correct_connections_10_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_12){
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_13){
                is_connected_9_13 = correct_connections_9_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_17){
                is_connected_14_17 = correct_connections_14_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_18){
                is_connected_17_18 = correct_connections_17_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_17){
                is_connected_16_17 = correct_connections_16_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_3_15){
                is_connected_3_15 = correct_connections_3_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
        

        if (is_connected_1_2 && is_connected_3_4 && is_connected_5_6 && is_connected_6_7 && is_connected_8_9 && is_connected_10_11 && is_connected_10_12 && is_connected_9_13 && is_connected_14_17 && is_connected_17_18 && is_connected_16_17 && is_connected_3_15 && !unallowed_connection_present) {
			
			  
            alert("RIGHT CONNECTION \n START SIMULATION");
            }
			else {
               alert("WRONG CONNECTION");
                return false;
            }  



    });
});

function deleteconnection(){
	window.location.reload();
}	
	
	
	
	
	
	
	
	
	
	
	
	
	







