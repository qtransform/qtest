var myApp = angular.module('unicorn_app', ['ngRoute', 'ngResource']).controller('unicornctrl', function($scope, $rootScope, $timeout) {

    $scope.cart_prods_length = 0;
            
    $scope.login_email = "";
    $scope.login_password = "";
    $scope.login_name = "";
    $scope.signup_email = "";
    $scope.signup_password = "";
    $scope.signup_fname = "";
    $scope.signup_lname = "";

    $scope.carts = [];
    $scope.products = [];

    $scope.temp_cart = {};
    $scope.colors = [
        '#007bff',
        '#6610f2',
        '#6f42c1',
        '#e83e8c',
        '#dc3545',
        '#fd7e14',
        '#ffc107',
        '#28a745',
        '#1abc9c',
        '#17a2b8',
        '#045fb4',
        '#6c757d',
        '#343a40',
        '#1abc9c',
        '#2c3e50',
        '#28a745',
        '#17a2b8',
        '#ffc107',
        '#dc3545',
        '#f8f9fa',

    ];

    // $.ajaxSetup({
    //     beforeSend: function(jqXHR, settings) {
    //         jqXHR.setRequestHeader('origin', 'x-requested-with');
    //     }
    // })

    $.getJSON("config.json", function(json) {
        console.log("API Endpoint : "+json['host'])
        $scope.$apply(function() {
            $scope.host = json.host;
            $scope.init();
        });
    });



    $scope.init = function() {
        
        $.ajax({
            type: "GET",
            url: $scope.host + "/api/unicorn",
            contentType: 'application/json',
            headers: { 'Access-Control-Allow-Origin': '*' },
            dataType: 'json',
            success: function(response) {
                // $scope.$apply(function() {
                console.log(response);
                $scope.products = response;
                $scope.prods_key = {};

                for (var i in $scope.products) {
                    $scope.prods_key[$scope.products[i].unicorn_id] = $scope.products[i];
                }
                console.log($scope.prods_key);
                // });
                // $scope.getCart();
                $scope.$apply();
            },
            error: function(err) {
                console.log(err, "Error");
                // $scope.$apply(function() {
                    // $scope.products = [{ "uuid": "73e8f9b1-b862-11e9-844a-0e8eba713748", "name": "UnicronFlaot", "description": "Big Unicorn Float! Giant Glitter Unicorn Pool Floaty", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-giant-unicorn-float-green-big-unicorn-float-giant-glitter-unicorn-pool-floaty-cuteness-overload-unicorn-gifts-7006202658876_540x.jpg?v=1546865023" }, { "uuid": "73ebc6a7-b862-11e9-844a-0e8eba713748", "name": "UnicronHipHop", "description": "Rainbow Hip Hop Unicorn With Sunglasses Kids Tshirt", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirt-sky-blue-4t-rainbow-unicorn-with-sunglasses-kids-tshirt-cuteness-overload-unicorn-gifts-2537594781756_540x.jpg?v=1547958744" }, { "uuid": "73ef8ef5-b862-11e9-844a-0e8eba713748", "name": "UnicronPartyDress", "description": "Girls Unicorn Party Dress - Tutu Pastel Rainbow Princess Power!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-kids-only-dress-12m-girls-unicorn-party-dress-tutu-pastel-rainbow-princess-power-cuteness-overload-unicorn-gifts-7001949732924_540x.jpg?v=1547969033" }, { "uuid": "73f2b657-b862-11e9-844a-0e8eba713748", "name": "UnicronGlitter", "description": "Unicorn Glitter Backpack - Shop for Unique Unicorn Gifts for Girls!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-unicorn-glitter-silver-unicorn-glitter-backpack-unicorn-gifts-for-girls-cuteness-overload-unicorn-gifts-7006189715516_540x.jpg?v=1555042785" }, { "uuid": "73f5a95b-b862-11e9-844a-0e8eba713748", "name": "UnicronBeddings", "description": "Rainbow Unicorn Bedding Set - The Perfect Kids or Adults Unicorn Duvet Set", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-unicorn-us-full-rainbow-unicorn-bedding-set-1-duvet-and-2-standard-pillow-cases-cuteness-overload-unicorn-gifts-6982763249724_540x.jpg?v=1546852365" }, { "uuid": "73f851ff-b862-11e9-844a-0e8eba713748", "name": "UnicronPink", "description": "Pretty Pink Baby Unicorn Summer Party Dress", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-12m-pretty-pink-baby-unicorn-summer-party-dress-cuteness-overload-unicorn-gifts-2975297896508_540x.jpg?v=1546863986" }, { "uuid": "73fb46a0-b862-11e9-844a-0e8eba713748", "name": "UnicronBackpack", "description": "Top Rated Classy Unicorn Backpack - Kawaii School Bag", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-style-1-top-rated-classy-unicorn-backpack-kawaii-school-bag-cuteness-overload-unicorn-gifts-2885280858172_540x.jpg?v=1546866520" }, { "uuid": "73fe09c0-b862-11e9-844a-0e8eba713748", "name": "UnicronBlanket", "description": "Superfun Bestselling Unicorn Hooded Blanket", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-9-127x152cm-superfun-bestselling-unicorn-hooded-blanket-cuteness-overload-unicorn-gifts-6957875822652_540x.jpg?v=1546852020" }, { "uuid": "7400a372-b862-11e9-844a-0e8eba713748", "name": "UnicronCool", "description": "Cool Dabbing Unicorn Mens Hip-hop Shirts", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirts-white-s-cool-dabbing-unicorn-mens-hip-hop-shirts-cuteness-overload-unicorn-gifts-2829379764284_540x.jpg?v=1546866958" }, { "uuid": "74036c31-b862-11e9-844a-0e8eba713748", "name": "UnicronFluffy", "description": "Stylish Fluffy Unicorn Slippers", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-slippers-gray-7-stylish-fluffy-unicorn-slippers-cuteness-overload-unicorn-gifts-2822282215484_540x.jpg?v=1546844697" }];
                // });
            }
        });
    };


    var db = new PouchDB('popedit7', { auto_compaction: true });

    db.get("user").then(function(doc) {

        $scope.$apply(function() {

            console.log("Setting User", doc);
            $scope.user = doc.uuid;
            $scope.user_email = doc.email;
            $scope.first_name = doc.first_name;
            $scope.last_name = doc.last_name;
            $scope.getCart();
            $.notify("Welcome back!", { className: "info", globalPosition: 'top center' });
        });
    }).catch(function(err) {
        console.log("User not logged in!");
    });;

    $scope.getcolor = function(index) {
        return $scope.colors[index];
    };

    $scope.getcolorrounded = function(index) {
        var len = $scope.colors.length;
        var random = Math.floor(Math.random() * len);
        return $scope.colors[index];
    };

    $('#login_button').click(function() {
        $scope.login($scope.login_email,$scope.login_password).then(function() {
            $scope.getCart();
            $('.modal').modal('hide');
            $.notify("Successfully Logged in", { globalPosition: "top center", className: "success" });

        }).catch(function(err){
            console.log("Login error :" + err.statusText)
            $.notify("Failed to Login", { globalPosition: "top center", className: "error" });
        })

    });

    $('#signup_button').click(function() {
        $scope.signup($scope.signup_email,$scope.signup_password,$scope.signup_fname,$scope.signup_lname).then(function() {
            $('.modal').modal('hide');
            $.notify("Successfully Signed up. You may login!", { className: "success", globalPosition: 'top center' });
        }).catch((function(err) {
            console.log("Signup error :" + err.statusText)
            $.notify("Failed to Signup", { globalPosition: "top center", className: "error" });
        }))
    });

    $scope.login = function(email,password) {

        return new Promise(function(resolve, reject) {
            console.log($scope.host + "/api/user/login");
            $.ajax({
                type: "POST",
                url: $scope.host + "/api/user/login",
                headers: { 'Access-Control-Allow-Origin': '*' },
                contentType: "application/json",
                data: JSON.stringify({
                    "email" : email,
                    "password" : password
                }),
                success: function(response) {
                    console.log(response, "User Found!"); // server response
                    $scope.$apply(function() {
                        $scope.user = response.user_id;
                        $scope.user_email = response.email;
                        $scope.first_name = response.first_name;
                        $scope.last_name = response.last_name;
                        console.log("User scope set");
                    })
                    console.log("Adding user to db");
                    db.put({
                        _id : "user",
                        uuid : response.user_id,
                        email : response.email,
                        first_name : response.first_name,
                        last_name : response.last_name
                    }).then(function() { 
                        resolve("success"); 
                    }).catch(function(err) {
                        reject(err)
                    })
                    // db.get("user").then(function(doc) {
                        
                    //     console.log("Loading user from db");
                    //     db.put({
                    //         _id: "user",
                    //         uuid: response.uuid,
                    //         email: response.email,
                    //         _rev: doc._rev
                    //     }).then(function() { 
                    //         resolve("success");
                    //     });

                    // }).catch(function(err) {
                    //     console.log("Adding user to db :", err);
                    //     db.put({
                    //         _id: "user",
                    //         uuid: response.uuid,
                    //         email: response.email
                    //     }).then(function() { 
                    //         resolve("success"); 
                    //     });
                    // });;
                },
                error: function(err) {
                    reject(err)
                }
            });
        });
    };

    $scope.signup = function(email,password,fname,lname) {

        return new Promise(function(resolve, reject) {

            $.ajax({
                type: "POST",
                url: $scope.host + "/api/user",
                headers: { 'Access-Control-Allow-Origin': '*' },
                contentType: "application/json",
                data: JSON.stringify({
                    "email" : email,
                    "password" :password,
                    "first_name" : fname,
                    "last_name" : lname
                }),
                success: function(response) {
                    console.log(response, "User Signed Up"); // server response
                    resolve("success");
                },
                error: function(err) {
                    reject(err)
                }
            });
        });
    };

    $scope.addToCart = function(puuid) {

        // var cuuid = $scope.user;

        // console.log(JSON.stringify({
        //     "uuid": cuuid,
        //     "unicorns": [{
        //         "uuid": puuid
        //     }]
        // }));

        return new Promise(function(resolve, reject) {
            var cuuid = $scope.user;
            $.ajax({
                type: "POST",
                url: $scope.host + "/api/basket",
                contentType: "application/json",
                dataType: 'json',
                data: JSON.stringify({
                    "user_id": cuuid,
                    "unicorn_id": puuid,
                }),

                success: function(response) {
                    console.log(response, "Added to cart ...", cuuid); // server response
                    $('.modal').modal('hide');
                    $.notify("Added to cart!", { className: "success", globalPosition: 'top center' });
                    $scope.getCart();
                    resolve("success");
                },
                error: function(err) {
                    console.log(err, "Error: Add cart");
                    reject(err)
                    // if (err.statusText == 'parsererror') {
                    //     // console.log(response, "Added to cart ...", cuuid); // server response
                    //     $('.modal').modal('hide');
                    //     $.notify("Added to cart!", { className: "success", globalPosition: 'top center' });
                    //     $scope.getCart();
                    //     resolve("success");
                    // }
                    // $scope.products = [{ "uuid": "73e8f9b1-b862-11e9-844a-0e8eba713748", "name": "UnicronFlaot", "description": "Big Unicorn Float! Giant Glitter Unicorn Pool Floaty", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-giant-unicorn-float-green-big-unicorn-float-giant-glitter-unicorn-pool-floaty-cuteness-overload-unicorn-gifts-7006202658876_540x.jpg?v=1546865023" }, { "uuid": "73ebc6a7-b862-11e9-844a-0e8eba713748", "name": "UnicronHipHop", "description": "Rainbow Hip Hop Unicorn With Sunglasses Kids Tshirt", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirt-sky-blue-4t-rainbow-unicorn-with-sunglasses-kids-tshirt-cuteness-overload-unicorn-gifts-2537594781756_540x.jpg?v=1547958744" }, { "uuid": "73ef8ef5-b862-11e9-844a-0e8eba713748", "name": "UnicronPartyDress", "description": "Girls Unicorn Party Dress - Tutu Pastel Rainbow Princess Power!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-kids-only-dress-12m-girls-unicorn-party-dress-tutu-pastel-rainbow-princess-power-cuteness-overload-unicorn-gifts-7001949732924_540x.jpg?v=1547969033" }, { "uuid": "73f2b657-b862-11e9-844a-0e8eba713748", "name": "UnicronGlitter", "description": "Unicorn Glitter Backpack - Shop for Unique Unicorn Gifts for Girls!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-unicorn-glitter-silver-unicorn-glitter-backpack-unicorn-gifts-for-girls-cuteness-overload-unicorn-gifts-7006189715516_540x.jpg?v=1555042785" }, { "uuid": "73f5a95b-b862-11e9-844a-0e8eba713748", "name": "UnicronBeddings", "description": "Rainbow Unicorn Bedding Set - The Perfect Kids or Adults Unicorn Duvet Set", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-unicorn-us-full-rainbow-unicorn-bedding-set-1-duvet-and-2-standard-pillow-cases-cuteness-overload-unicorn-gifts-6982763249724_540x.jpg?v=1546852365" }, { "uuid": "73f851ff-b862-11e9-844a-0e8eba713748", "name": "UnicronPink", "description": "Pretty Pink Baby Unicorn Summer Party Dress", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-12m-pretty-pink-baby-unicorn-summer-party-dress-cuteness-overload-unicorn-gifts-2975297896508_540x.jpg?v=1546863986" }, { "uuid": "73fb46a0-b862-11e9-844a-0e8eba713748", "name": "UnicronBackpack", "description": "Top Rated Classy Unicorn Backpack - Kawaii School Bag", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-style-1-top-rated-classy-unicorn-backpack-kawaii-school-bag-cuteness-overload-unicorn-gifts-2885280858172_540x.jpg?v=1546866520" }, { "uuid": "73fe09c0-b862-11e9-844a-0e8eba713748", "name": "UnicronBlanket", "description": "Superfun Bestselling Unicorn Hooded Blanket", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-9-127x152cm-superfun-bestselling-unicorn-hooded-blanket-cuteness-overload-unicorn-gifts-6957875822652_540x.jpg?v=1546852020" }, { "uuid": "7400a372-b862-11e9-844a-0e8eba713748", "name": "UnicronCool", "description": "Cool Dabbing Unicorn Mens Hip-hop Shirts", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirts-white-s-cool-dabbing-unicorn-mens-hip-hop-shirts-cuteness-overload-unicorn-gifts-2829379764284_540x.jpg?v=1546866958" }, { "uuid": "74036c31-b862-11e9-844a-0e8eba713748", "name": "UnicronFluffy", "description": "Stylish Fluffy Unicorn Slippers", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-slippers-gray-7-stylish-fluffy-unicorn-slippers-cuteness-overload-unicorn-gifts-2822282215484_540x.jpg?v=1546844697" }];
                }
            });
        });
    };
    
    $('#cartModal').on('show.bs.modal', function(e) {
        $scope.getCart();
    });


    $scope.getCart = function() {

        if($scope.user === undefined) {
            return
        }
        $.ajax({
            type: "GET",
            url: $scope.host + "/api/basket/" + $scope.user,
            success: function(response) {

                $scope.$apply(function() {

                    $scope.cart_prods = [];
                    if (response != null) {
                        console.log(response, " Got the cart"); // server response
                        for (var i in response) {
                            $scope.cart_prods.push({...$scope.prods_key[response[i].unicorn_id],basket_id : response[i]['basket_id']});
                        }
                    }
                    $scope.cart_prods_length = $scope.cart_prods.length;
                });
            },
            error: function(err) {
                console.log(err.statusText, " Get cart error");
                if (err.status == 404) {
                    $scope.$apply(function() {
                        $scope.cart_prods = [];
                        $scope.cart_prods_length = $scope.cart_prods.length;
                    });
                }
            }
        });
    };

    $scope.deleteFromCart = function(basket_id) {

        // return new Promise(function(resolve, reject) {
        var cuuid = $scope.user;
        $.ajax({
            type: "DELETE",
            url: $scope.host + "/api/basket/"+basket_id,
            success: function(response) {
                console.log(response, "Removed from cart"); // server response
                $.notify("Removed from cart!", { className: "success", globalPosition: 'top center' });
                $scope.getCart();
                $('.modal').modal('hide');
            },
            error: function(err) {
                console.log(err, "Error: Remove from cart");
                $.notify("Failed to remove from cart", { className: "error", globalPosition: 'top center' });
                // if (err.statusText === 'parsererror') {
                //     $.notify("Removed from cart!", { className: "success", globalPosition: 'top center' });
                //     $scope.getCart();

                //     $('.modal').modal('hide');
                // }
                // $scope.products = [{ "uuid": "73e8f9b1-b862-11e9-844a-0e8eba713748", "name": "UnicronFlaot", "description": "Big Unicorn Float! Giant Glitter Unicorn Pool Floaty", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-giant-unicorn-float-green-big-unicorn-float-giant-glitter-unicorn-pool-floaty-cuteness-overload-unicorn-gifts-7006202658876_540x.jpg?v=1546865023" }, { "uuid": "73ebc6a7-b862-11e9-844a-0e8eba713748", "name": "UnicronHipHop", "description": "Rainbow Hip Hop Unicorn With Sunglasses Kids Tshirt", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirt-sky-blue-4t-rainbow-unicorn-with-sunglasses-kids-tshirt-cuteness-overload-unicorn-gifts-2537594781756_540x.jpg?v=1547958744" }, { "uuid": "73ef8ef5-b862-11e9-844a-0e8eba713748", "name": "UnicronPartyDress", "description": "Girls Unicorn Party Dress - Tutu Pastel Rainbow Princess Power!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-kids-only-dress-12m-girls-unicorn-party-dress-tutu-pastel-rainbow-princess-power-cuteness-overload-unicorn-gifts-7001949732924_540x.jpg?v=1547969033" }, { "uuid": "73f2b657-b862-11e9-844a-0e8eba713748", "name": "UnicronGlitter", "description": "Unicorn Glitter Backpack - Shop for Unique Unicorn Gifts for Girls!", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-unicorn-glitter-silver-unicorn-glitter-backpack-unicorn-gifts-for-girls-cuteness-overload-unicorn-gifts-7006189715516_540x.jpg?v=1555042785" }, { "uuid": "73f5a95b-b862-11e9-844a-0e8eba713748", "name": "UnicronBeddings", "description": "Rainbow Unicorn Bedding Set - The Perfect Kids or Adults Unicorn Duvet Set", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-unicorn-us-full-rainbow-unicorn-bedding-set-1-duvet-and-2-standard-pillow-cases-cuteness-overload-unicorn-gifts-6982763249724_540x.jpg?v=1546852365" }, { "uuid": "73f851ff-b862-11e9-844a-0e8eba713748", "name": "UnicronPink", "description": "Pretty Pink Baby Unicorn Summer Party Dress", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-12m-pretty-pink-baby-unicorn-summer-party-dress-cuteness-overload-unicorn-gifts-2975297896508_540x.jpg?v=1546863986" }, { "uuid": "73fb46a0-b862-11e9-844a-0e8eba713748", "name": "UnicronBackpack", "description": "Top Rated Classy Unicorn Backpack - Kawaii School Bag", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-style-1-top-rated-classy-unicorn-backpack-kawaii-school-bag-cuteness-overload-unicorn-gifts-2885280858172_540x.jpg?v=1546866520" }, { "uuid": "73fe09c0-b862-11e9-844a-0e8eba713748", "name": "UnicronBlanket", "description": "Superfun Bestselling Unicorn Hooded Blanket", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-bedding-9-127x152cm-superfun-bestselling-unicorn-hooded-blanket-cuteness-overload-unicorn-gifts-6957875822652_540x.jpg?v=1546852020" }, { "uuid": "7400a372-b862-11e9-844a-0e8eba713748", "name": "UnicronCool", "description": "Cool Dabbing Unicorn Mens Hip-hop Shirts", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-tshirts-white-s-cool-dabbing-unicorn-mens-hip-hop-shirts-cuteness-overload-unicorn-gifts-2829379764284_540x.jpg?v=1546866958" }, { "uuid": "74036c31-b862-11e9-844a-0e8eba713748", "name": "UnicronFluffy", "description": "Stylish Fluffy Unicorn Slippers", "price": 100.0, "image": "https://cdn.shopify.com/s/files/1/0028/1319/8396/products/big-unicorn-store-slippers-gray-7-stylish-fluffy-unicorn-slippers-cuteness-overload-unicorn-gifts-2822282215484_540x.jpg?v=1546844697" }];
            }
        });
        // });

    };

    $scope.logout = function() {
        db.get('user').then(function(doc) {
            db.remove(doc).then((done)=>{
                location.reload();
            }).catch((error)=>{
                console.log(error)
            })
        });
    };

});