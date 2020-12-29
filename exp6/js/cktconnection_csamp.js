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
               
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	//-----------------------voltage connection------------------------//
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "rgba(255,0,0,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
//-----------------------ground connection------------------------//
endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "rgba(0,0,0,1)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -10 } ], //line connection curve
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
			e13 = prepare("ld13"),
			e14 = prepare("ld14"),
			e15 = prepare("ld15"),
			e16 = prepare("ld16"),
			e17 = prepare("ld17"),
			e18 = prepare("ld18"),
			e19 = prepare("ld19"),
			e20 = prepare("ld20"),
			e21 = prepare("ld21"),
			e22 = prepare("ld22"),
			e23 = prepare("ld23"),
			e24 = prepare("ld24"),
			e25 = prepare("ld25"),
			e26 = prepare("ld26"),
		
            e12 = prepare1("ld12"),
			

            clearBtn = jsPlumb.getSelector("#delete-connct"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            //instance.on(document.getElementById("delete-connct"), "click", function (e) {
               // instance.detachEveryConnection();
            //showConnectionInfo("");
               // jsPlumbUtil.consume(e);

            //});
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

      
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_4_5 = [
            {
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            }
        ];        

        var correct_connections_6_8 = [
            {
                "source": "ld6",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld6"
            }
        ];
var correct_connections_6_14 = [
            {
                "source": "ld6",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld6"
            }
        ];
		var correct_connections_6_24 = [
            {
                "source": "ld6",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld6"
            }
        ];
      

        var correct_connections_9_12 = [
            {
                "source": "ld9",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld9"
            }
        ];

        var correct_connections_7_13 = [
            {
                "source": "ld7",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld7"
            }
        ];
 var correct_connections_10_13 = [
            {
                "source": "ld10",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld10"
            }
        ];
		var correct_connections_26_11 = [
            {
                "source": "ld26",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld26"
            }
        ];
        var correct_connections_11_22 = [
            {
                "source": "ld11",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld11"
            }
        ];
		var correct_connections_16_25 = [
            {
                "source": "ld16",
                "target": "ld25"
            },

            {
                "source": "ld25",
                "target": "ld16"
            }
        ];
		var correct_connections_18_16 = [
            {
                "source": "ld18",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld18"
            }
        ];
		var correct_connections_20_23 = [
            {
                "source": "ld20",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld20"
            }
        ];

		var correct_connections_9_15 = [
            {
                "source": "ld9",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld9"
            }
        ];
		var correct_connections_15_17 = [
            {
                "source": "ld15",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld15"
            }
        ];
		var correct_connections_17_19 = [
            {
                "source": "ld17",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld17"
            }
        ];
		var correct_connections_19_21 = [
            {
                "source": "ld19",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld19"
            }
        ];
		



        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
			{
                "source": "ld4",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld4"
            },
			{
                "source": "ld6",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld6"
            },
			{
                "source": "ld6",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld6"
            },
			{
                "source": "ld6",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld6"
            },
			{
                "source": "ld7",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld7"
            },
			{
                "source": "ld9",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld9"
            },
			{
                "source": "ld10",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld10"
            },
			{
                "source": "ld26",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld26"
            },
			{
                "source": "ld11",
                "target": "ld22"
            },

            {
                "source": "ld22",
                "target": "ld11"
            },
			{
                "source": "ld16",
                "target": "ld25"
            },

            {
                "source": "ld25",
                "target": "ld16"
            },
			{
                "source": "ld18",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld18"
            },
			{
                "source": "ld20",
                "target": "ld23"
            },

            {
                "source": "ld23",
                "target": "ld20"
            },
			{
                "source": "ld9",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld9"
            },
			{
                "source": "ld19",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld19"
            },
			{
                "source": "ld17",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld17"
            },
			{
                "source": "ld15",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld15"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_9_12 = false;
        var is_connected_4_5 = false;
        var is_connected_6_24 = false;
		var is_connected_6_14 = false;
		var is_connected_6_8 = false;
	    var is_connected_7_13 = false;
		var is_connected_10_13 = false;
		var is_connected_26_11 = false;
		var is_connected_11_22 = false;
		var is_connected_16_25 = false;
		var is_connected_18_16 = false;
		var is_connected_20_23 = false;
		var is_connected_9_15 = false;
		var is_connected_15_17 = false;
		var is_connected_17_19 = false;
		var is_connected_19_21 = false;
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
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
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_5){
                is_connected_4_5 = correct_connections_4_5.find(function (conn) {
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

            if(!is_connected_6_24){
                is_connected_6_24 = correct_connections_6_24.find(function (conn) {
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

            if(!is_connected_6_8){
                is_connected_6_8 = correct_connections_6_8.find(function (conn) {
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

            if(!is_connected_6_14){
                is_connected_6_14 = correct_connections_6_14.find(function (conn) {
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

            if(!is_connected_9_12){
                is_connected_9_12 = correct_connections_9_12.find(function (conn) {
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

            if(!is_connected_7_13){
                is_connected_7_13 = correct_connections_7_13.find(function (conn) {
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

            if(!is_connected_10_13){
                is_connected_10_13 = correct_connections_10_13.find(function (conn) {
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

            if(!is_connected_26_11){
                is_connected_26_11 = correct_connections_26_11.find(function (conn) {
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

            if(!is_connected_11_22){
                is_connected_11_22 = correct_connections_11_22.find(function (conn) {
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

            if(!is_connected_16_25){
                is_connected_16_25 = correct_connections_16_25.find(function (conn) {
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

            if(!is_connected_18_16){
                is_connected_18_16 = correct_connections_18_16.find(function (conn) {
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

            if(!is_connected_20_23){
                is_connected_20_23 = correct_connections_20_23.find(function (conn) {
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

            if(!is_connected_9_15){
                is_connected_9_15 = correct_connections_9_15.find(function (conn) {
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

            if(!is_connected_15_17){
                is_connected_15_17 = correct_connections_15_17.find(function (conn) {
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

            if(!is_connected_17_19){
                is_connected_17_19 = correct_connections_17_19.find(function (conn) {
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

            if(!is_connected_19_21){
                is_connected_19_21 = correct_connections_19_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_3 && is_connected_4_5 && is_connected_6_24 && is_connected_9_12 && is_connected_6_14 && is_connected_6_8 &&is_connected_7_13 &&is_connected_10_13 &&is_connected_26_11 && is_connected_11_22 &&is_connected_16_25 &&is_connected_18_16 &&is_connected_20_23 &&is_connected_9_15 &&is_connected_15_17 &&is_connected_17_19 &&is_connected_19_21 && !unallowed_connection_present) {
			
			
			 	document.getElementById('add').disabled = false;
  				document.getElementById('plt').disabled = false;
 				document.getElementById('clr').disabled = false;
	   			
	  
            alert("RIGHT CONNECTION \n set resistances and capacitances as given in instruction");
            } else {
               alert("WRONG CONNECTION");
                return;
            }  



    });
});



function deleteconnection(){
window.location.reload();
}


