$(document).ready(()=>{

    $(window).on('load',()=>{
        setTimeout(()=>{
            $('#loader').fadeOut()
        },1000)
    })  



    // the end of the countdown
    // let date = new Date("2023-07-12T19:41:26").getTime()//return the date we wanted in milliseconds then i convert it to seconds
    let date = new Date("July 12, 2028 20:12:10").getTime()//return the date we wanted in milliseconds then i convert it to seconds

    let counter = setInterval(()=>{

        let dateNow = new Date().getTime()  //return the time actuell in milliseconds then i convert it to seconds

        let diffDate = date - dateNow //the difference between the actuell date and the date wanted
        console.log(diffDate);
        let days = Math.floor(diffDate /(1000 * 60 * 60 * 24))
        let hours = Math.floor((diffDate %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor( (diffDate % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((diffDate % (1000 * 60))/ 1000)
        
        $('#days').html(days>=10?days:`0${days}`)
        $('#hours').html(hours>=10?hours:`0${hours}`)
        $('#minutes').html(minutes>=10?minutes:`0${minutes}`)
        $('#seconds').html(seconds>=10?seconds:`0${seconds}`)

        if(diffDate<1000){
            clearInterval(counter)
            $('#days').html('00')
            $('#hours').html('00')
            $('#minutes').html('00')
            $('#seconds').html('00')
        }


    },1000)








})