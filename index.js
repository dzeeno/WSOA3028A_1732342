// console.log()
// var a = 1; //old, dont use it.
// let b = 2; // modern var. because dont break the web. 
// const c = 3; // only assign to this variable once. it is safe.
// let c = true;

// 8 Types: Numbers. 1 complex, 7 primitaves. Boolean, null(memory reference set to nothing), undefined(not even a memmory reference), number, Bigint(large numbers) string and symbol. The Object is the complex.

//false, null, 0, "", undefined, [] all, NaN = false faulty values
// =, ==, ===.
//you can also create classes in java. Its amazing because its a reliable container fpr "this" that will be set to an instance of a class. 



//  So Javascripts main functionaly is that its functional. It is executable or allows for certain actions/ procedures to be excuted

//<script>
{
    <button>Help</button>
    const button = document.querySelector('button');

    button.onclick = function () {
        let name = prompt('Can I help you?');
        alert('Hello ' + name + ', nice to see you!');



        // the random number generator game
        //{
        //  let randomNumber = Math.floor(Math.random() * 100) + 1;

        //  // const guesses = document.querySelector('.guesses');
        //   const lastResult = document.querySelector('.lastResult');
        //   const lowOrHi = document.querySelector('.lowOrHi');

        //   const guessSubmit = document.querySelector('.guessSubmit');
        //   const guessField = document.querySelector('.guessField');

        //   let guessCount = 1;
        //   let resetButton;
        // }

        // </script>

        // Theres a button that says Press me. When you click it a prompt shows up that says What is your name with a space for you to input your name.  When you submit, an alert pops up that says nice to see you. We also now use let instead of var because its a more correct way of using js.

        <title id="blogs">Blog Navigation</title>
        var blogNav = document.getElementById("blogs").innerHTML;
        var blogNav = document.getElementById("blogs").innerHTML.nodeValue;

        let blogs = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']
        console.log(blogs.length)

        let first = blogs[0]
        let last = blogs[blogs.lenght - 1]



