/*  Document Name: oscilloscope_knob.js
Created on : 24 aug, 2021
 Author     : Sukriti Dhang
 */

var vmaxs;  //in volt
var tmaxs; // in msec  0.001; //in sec
$(document).ready(function () {

//------------------------------knob of frequency(tmax)time/div(ms/div)----------------------//
    $("#fq-knob").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 0.1,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag == 1) {
                drawsine1();
            }
            if (flag == 2) {
                 drawsquarewv1();
            }
            if (flag == 3) {
                drawtraingwv1();
            }
            if (flag == 6) {
                drawsine2();
            }
            if (flag == 7) {
                drawsquarewv2();
            }
             if (flag == 8) {
                drawtraingwv2();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
     
        }
    });
    //-----------------------knob of amplitude1(vmax/div)-------------------------------//
    $("#amp-knob1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
       min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag == 1) {
                drawsine1();
            }
            if (flag == 2) {
                 drawsquarewv1();
            }
            if (flag == 3) {
                drawtraingwv1();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
            
        }
    });
    //-----------------------knob of amplitude2(vmax/div)-------------------------------//
    $("#amp-knob2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
           
            if (flag == 6) {
                drawsine2();
            }
            if (flag == 7) {
                drawsquarewv2();
            }
             if (flag == 8) {
                drawtraingwv2();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
        }

    });
	/* ------------------------------------------------------------function generator 1------------------------------------------------------*/
//------------------------------knob of frequency(hz)----------------------//
    $("#fq-knob-fng1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 500,
        max: 5000,
        step: 500,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag == 1) {
                drawsine1();
            }
            if (flag == 2) {
                 drawsquarewv1();
            }
            if (flag == 3) {
                drawtraingwv1();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
            
        }

    });
    //-----------------------knob of amplitude1(volt)-------------------------------//
    $("#amp-knob-fng1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: -10,
        max: 10,
        step: 1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag == 1) {
                drawsine1();
            }
            if (flag == 2) {
                 drawsquarewv1();
            }
            if (flag == 3) {
                drawtraingwv1();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
            
        }

    });
	/* --------------------------------------------------------function generator 2--------------------------------------------------------*/
	//------------------------------knob of frequency2(hz)----------------------//
    $("#fq-knob-fng2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 500,
        max: 5000,
        step: 500,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
           
            if (flag == 6) {
                drawsine2();
            }
            if (flag == 7) {
                drawsquarewv2();
            }
             if (flag == 8) {
                drawtraingwv2();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
        }

    });
    //-----------------------knob of amplitude2(volt)-------------------------------//
    $("#amp-knob-fng2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: -10,
        max: 10,
        step: 1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            
            if (flag == 6) {
                drawsine2();
            }
            if (flag == 7) {
                drawsquarewv2();
            }
             if (flag == 8) {
                drawtraingwv2();
            }
            if (flag == 5){
                bothwvsin();
            }
            if (flag == 11){
                bothwvsq();   
            }
            if (flag == 12){
                bothwvtri();
            }
            if (flag == 13){
                xywvsin();
            }
            if (flag == 14){
                xywvsq();   
            }
            if (flag == 15){
                xywvtri();
            }
        }

    });
});

