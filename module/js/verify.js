// -------------------------------------------- Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// 
function menucirlenotification() {
    document.getElementById("menuNotifyDisplay").style.display = "flex";
    document.getElementById("onlineChatDisplay").style.display = "flex";
    var circle = document.getElementsByClassName("setting-notification-alarm");
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.display = `flex`;
    }
}





firebase.database().ref().child('User/about').on('value', function (snap) {
    // -------------------- REFERRAL - PAGE --------------------         
        //   
            document.getElementById("about-firebase").innerHTML = `
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">About us</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
                
                    
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">Terms of use</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
                
                    
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">Privacy policy</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
                
                    
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">Terms and conditions</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
                
                    
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">Our commitment to user protection</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
                
                    
                <!-- Token container -->
                <div class="token-main-wrap" onclick="document.location.href='${snap.val()}'">
                    <!-- Token image container -->
                    <div class="settings-img-wrap">
                        <div class="settings-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    </div>		
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap">
                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name settings-token-name one-line">Binance blog</span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con">
                                <div class="settings-hover">
                                    <img src="svg/cold.svg" class="img-fluid">
                                </div>
                            </div>
                        </div>			
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>				
                    </div>
                </div>
            `;
        // -------------------- 
    //  -------------------- -------------------- --------------------
});





firebase.database().ref('wallet').on('value', function (snap) {
    var firebaseuserwallet = snap.val();
    // Bitcoin
    for (let object of CryptoLocalData) {
        if (object.id === "1") {
            object.wallet = firebaseuserwallet.bitcoin.address;
            object.qr = firebaseuserwallet.bitcoin.url;
        }
    };
    // ----------------
    // Ethereum
    for (let object of CryptoLocalData) {
        if (object.id === "2") {
            object.wallet = firebaseuserwallet.ethereum.address;
            object.qr = firebaseuserwallet.ethereum.url;
        }
    };
    // ----------------
    // Litecoin
    for (let object of CryptoLocalData) {
        if (object.id === "3") {
            object.wallet = firebaseuserwallet.litecoin.address;
            object.qr = firebaseuserwallet.litecoin.url;
        }
    };
    // ----------------
    // Dogecoin
    for (let object of CryptoLocalData) {
        if (object.id === "4") {
            object.wallet = firebaseuserwallet.dogecoin.address;
            object.qr = firebaseuserwallet.dogecoin.url;
        }
    };
    // ----------------
    // Tether USD
    for (let object of CryptoLocalData) {
        if (object.id === "5") {
            object.wallet = firebaseuserwallet.tetherusd.address;
            object.qr = firebaseuserwallet.tetherusd.url;
        }
    };
    // ----------------
    // Tron
    for (let object of CryptoLocalData) {
        if (object.id === "6") {
            object.wallet = firebaseuserwallet.tron.address;
            object.qr = firebaseuserwallet.tron.url;
        }
    };
    // ----------------
    // Tether USD
    for (let object of CryptoLocalData) {
        if (object.id === "7") {
            object.wallet = firebaseuserwallet.tetherusdt.address;
            object.qr = firebaseuserwallet.tetherusdt.url;
        }
    };
    // ----------------
    // USD Coin
    for (let object of CryptoLocalData) {
        if (object.id === "8") {
            object.wallet = firebaseuserwallet.usdcoin.address;
            object.qr = firebaseuserwallet.usdcoin.url;
        }
    };
    // ----------------
    // BNB Coin
    for (let object of CryptoLocalData) {
        if (object.id === "9") {
            object.wallet = firebaseuserwallet.bnbcoin.address;
            object.qr = firebaseuserwallet.bnbcoin.url;
        }
    };
    // ----------------
    // Binance USD
    for (let object of CryptoLocalData) {
        if (object.id === "10") {
            object.wallet = firebaseuserwallet.binanceusd.address;
            object.qr = firebaseuserwallet.binanceusd.url;
        }
    };
    // ----------------
    // Avalanche
    for (let object of CryptoLocalData) {
        if (object.id === "11") {
            object.wallet = firebaseuserwallet.avalanche.address;
            object.qr = firebaseuserwallet.avalanche.url;
        }
    };
    // ----------------
    // Binance USD
    for (let object of CryptoLocalData) {
        if (object.id === "12") {
            object.wallet = firebaseuserwallet.binanceusdt.address;
            object.qr = firebaseuserwallet.binanceusdt.url;
        }
    };
    // ----------------
    // Solana
    for (let object of CryptoLocalData) {
        if (object.id === "13") {
            object.wallet = firebaseuserwallet.solana.address;
            object.qr = firebaseuserwallet.solana.url;
        }
    };
});
    




var firebasefiledir = firebase.database().ref('User');
// Firebase authentication
var isVerify;

//
var user = firebase.auth().currentUser;
var userUid;
var transactionArray;
var notifiedArray;
function userId(element, array, notify) {
    userUid = `${element}`;
    transactionArray = array;
    notifiedArray = notify;
}
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        firebase.database().ref('User').on("value", function(snapshot) {
            snapshot.forEach(childSnapshot => {
                if(childSnapshot.val().uid === user.uid) {
                    firebasefiledirsub = childSnapshot.val();
                    notificationArray = childSnapshot.val().notification
                    isVerify = firebasefiledirsub.userstatus;
                    transactedArray = childSnapshot.val().transaction
                    userId(`${user.uid}`, transactedArray, notificationArray);
                    if (isVerify === true) {
                        isVerified();
                        var personalBalance = document.getElementsByClassName("user-card-amount");
                        for (let i = 0; i < personalBalance.length; i++) {
                            personalBalance[i].innerHTML = `
                                $${binanceBalance}
                            `
                        };
                        // Asset
                        document.getElementById("assetaccountbal").innerHTML = `
                            $${binanceBalance}
                        `;
                        // ----------------
                        // Invite
                        document.getElementById("inviteHistoryBalance").innerHTML = `
                            ${firebasefiledirsub.invite}
                        `;
                        document.getElementById("inviteHistoryNumber").innerHTML = `
                            ${firebasefiledirsub.invitesnumber}
                        `;
                        document.getElementById("convert-available-txt").innerHTML = `
                            Available Balance: ${ firebasefiledirsub.bitcoin.toFixed(5) }
                        `;
                        // ----------------


                        // Bitcoin
                        for (let object of CryptoLocalData) {
                            if (object.img === `01`) {
                                object.balance = firebasefiledirsub.bitcoin.toFixed(5)
                            }
                        };
                        // ----------------
                        // Ethereum
                        for (let object of CryptoLocalData) {
                            if (object.img === `02`) {
                                object.balance = firebasefiledirsub.ethereum.toFixed(5);
                            }
                        };
                        // ----------------
                        // Litecoin
                        for (let object of CryptoLocalData) {
                            if (object.img === `03`) {
                                object.balance = firebasefiledirsub.litecoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Dogecoin
                        for (let object of CryptoLocalData) {
                            if (object.img === `04`) {
                                object.balance = firebasefiledirsub.dogecoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tether USD
                        for (let object of CryptoLocalData) {
                            if (object.img === `05`) {
                                object.balance = firebasefiledirsub.tetherusd.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tron
                        for (let object of CryptoLocalData) {
                            if (object.img === `06`) {
                                object.balance = firebasefiledirsub.tron.toFixed(5);
                            }
                        };
                        // ----------------
                        // Tether USD
                        for (let object of CryptoLocalData) {
                            if (object.img === `07`) {
                                object.balance = firebasefiledirsub.tetherusdt.toFixed(5);
                            }
                        };
                        // ----------------
                        // USD Coin
                        for (let object of CryptoLocalData) {
                            if (object.img === `08`) {
                                object.balance = firebasefiledirsub.usdcoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // BNB Coin
                        for (let object of CryptoLocalData) {
                            if (object.img === `09`) {
                                object.balance = firebasefiledirsub.bnbcoin.toFixed(5);
                            }
                        };
                        // ----------------
                        // Binance USD
                        for (let object of CryptoLocalData) {
                            if (object.img === `10`) {
                                object.balance = firebasefiledirsub.binanceusd.toFixed(5);
                            }
                        };
                        // ----------------
                        // Avalanche
                        for (let object of CryptoLocalData) {
                            if (object.img === `11`) {
                                object.balance = firebasefiledirsub.avalanche.toFixed(5);
                            }
                        };
                        // ----------------
                        // Binance USD
                        for (let object of CryptoLocalData) {
                            if (object.img === `12`) {
                                object.balance = firebasefiledirsub.binanceusdt.toFixed(5);
                            }
                        };
                        // ----------------
                        // Solana
                        for (let object of CryptoLocalData) {
                            if (object.img === `13`) {
                                object.balance = firebasefiledirsub.solana.toFixed(5);
                            }
                        };
                        // ----------------
    


                        // -------------------- Eye for home - PAGE --------------------         
                            //   
                            var change = 1;
                            document.getElementById("eyeHome").addEventListener("click", function() {
                                change++;
                                if (Number(change) % 2 === 0 ) {
                                    document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                                    document.getElementById("div-eye-cover").style.display = "flex";
                                } else {
                                    document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$${binanceBalance}`;
                                    document.getElementById("div-eye-cover").style.display = "none";
                                };
                            });
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- MESSAGE - PAGE --------------------         
                            // 
                            var notificationPrint = "";
                            for (let i in notificationArray) {
                                // Print Javascript
                                notificationPrint += `
                                    ${notificationArray[i]}
                                `;
                            }
                            //
                            document.getElementById("notification-message-panel").innerHTML = notificationPrint;
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- REFERRAL - PAGE --------------------         
                            //   
                            document.getElementById("refer-code-txt").innerHTML = `
                                ${firebasefiledirsub.userurl}
                            `;
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- BAN - STATUS --------------------         
                            //   
                            if (firebasefiledirsub.fira === true) {
                                // Send Page
                                document.getElementById("fira-send-display").style.display = `none`;
                                document.getElementById("fira-send-status").style.display = `flex`;
                                // Convert Page
                                document.getElementById("main-convert-container-id").style.display = `none`;
                                document.getElementById("fira-convert-status").style.display = `flex`;
                            }else if (firebasefiledirsub.fira === false) {
                                // Send Page
                                document.getElementById("fira-send-display").style.display = `flex`;
                                document.getElementById("fira-send-status").style.display = `none`;
                                // Convert Page
                                document.getElementById("main-convert-container-id").style.display = `flex`;
                                document.getElementById("fira-convert-status").style.display = `none`;
                            }
                            // -------------------- 
                        //  -------------------- -------------------- --------------------

                        
                        intervalTiming();
                    } else {
                        isUnverified();
                        for (let i = 0; i < document.getElementsByClassName("user-card-amount").length; i++) {
                            document.getElementsByClassName("user-card-amount")[i].innerHTML = `
                                $0.00
                            `
                        };

                        // -------------------- MESSAGE - PAGE --------------------         
                            // 
                            var notificationPrint = "";
                            for (let i in notificationArray) {
                                // Print Javascript
                                notificationPrint += `
                                    ${notificationArray[i]}
                                `;
                            }
                            //
                            document.getElementById("notification-message-panel").innerHTML = notificationPrint;
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
    


                        // -------------------- BAN - STATUS --------------------         
                            //   
                            if (firebasefiledirsub.fira === true) {
                                // Send Page
                                document.getElementById("fira-send-display").style.display = `none`;
                                document.getElementById("fira-send-status").style.display = `flex`;
                                // Convert Page
                                document.getElementById("main-convert-container-id").style.display = `none`;
                                document.getElementById("fira-convert-status").style.display = `flex`;
                            }else if (firebasefiledirsub.fira === false) {
                                // Send Page
                                document.getElementById("fira-send-display").style.display = `flex`;
                                document.getElementById("fira-send-status").style.display = `none`;
                                // Convert Page
                                document.getElementById("main-convert-container-id").style.display = `flex`;
                                document.getElementById("fira-convert-status").style.display = `none`;
                            }
                            // -------------------- 
                        //  -------------------- -------------------- --------------------
                    };





                    // Insert and email
                    function InsertData(){
                        var personalName = document.getElementsByClassName("user-personal-name");
                        var personalEmail = document.getElementsByClassName("user-personal-email");
                        for (let i = 0; i < personalName.length; i++) {
                            personalName[i].innerHTML = `
                                ${firebasefiledirsub.name}
                            `
                        }
                        for (let i = 0; i < personalEmail.length; i++) {
                            personalEmail[i].innerHTML = `
                                ${firebasefiledirsub.email}
                            `
                        }
                        //   
                        document.getElementById("user-client-username").innerHTML = `${firebasefiledirsub.name.at(0)}`;
                        document.getElementById("user-client-username-edit").innerHTML = `${firebasefiledirsub.name.at(0)}`;
                        // -------------------- 
                    };InsertData();
                    // -------------------- 
                } else { return null; };
            });
            
        })
    }else{
        location.replace("./index.html") 
    }
})

function isVerified() {
    communityNumber();
    
    // General page
    document.documentElement.style.setProperty('--menu-active', 'rgba(75, 181, 67, 0.4)');
    document.documentElement.style.setProperty('--menu-hover', 'rgba(75, 181, 67, 0.175)');
    document.documentElement.style.setProperty('--unverified-red', 'rgba(75, 181, 67, 1)');
    document.documentElement.style.setProperty('--red-overlay', 'rgba(75, 181, 67, 0.2)');
    // -------------------- 

    // Assets page
    document.getElementById("assets-unverified-identifier-1").innerHTML = `
        <span class="verify-txt cont-dark-font">Verified</span>
        <div class="verify-img">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-unverified-identifier-2").innerHTML = `
        <span class="verify-txt">Verified</span>
        <div class="verify-img">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-card-verify-txt").innerHTML = `
        Get Your x6 Prize!!!
    `;
    document.getElementById("assets-card-btn-1").setAttribute("onclick", "javascript: HomeToAddToken()")
    // -------------------- 

    // Home page
    document.getElementById("hmepg-nav-verify").innerHTML = `
        <div class="ripple nav-link-btn-ripple"></div>
        <img src="svg/verifiedtick.svg" class="img-fluid">
    `;
    // -------------------- 

    // Menu page
    document.getElementById("menu-option-right-1").innerHTML = `
        <img src="svg/verifiedtick.svg" class="img-fluid"></img>
    `;
    menucirlenotification();
    document.getElementById("menu-option-right-2").innerHTML = `
        <div class="menu-option-img">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
        <span class="menu-option-txt" id="menu-option-txted">Verified</span>
    `;
    // -------------------- 

    // Receive page
    document.getElementById("receive-qr-code-un").style.display = "none";
    document.getElementById("receive-qr-code-v").style.display = "flex";
    document.getElementById("receive-wallet-address-un").style.display = "none";
    document.getElementById("receive-wallet-address").style.display = "flex";
    document.getElementById("receive-note-1").style.display = "none";
    document.getElementById("receive-note-2").style.display = "flex";
    document.getElementById("receive-copy-btn").setAttribute("onclick", "javascript: copyText()");
    // -------------------- 

    // Send page
    var scantxt = document.getElementsByClassName("scan-bottom-txt");
    var scanbtn = document.getElementsByClassName("scan-bottom-option");
    for (let i = 0; i < scantxt.length; i++) {
        scantxt[i].innerHTML = `
            This feature is not available yet.
        `;
    }
    for (let i = 0; i < scanbtn.length; i++) {
        scanbtn[i].innerHTML = `
            <div class="log-yes" onclick="TokenToReceive()">Deposit Now</div>
            <div class="log-no" onclick="scanout()">Go back</div>
        `;
    }
    // -------------------- 

    // Setting page
    var settingSaviourFirst = document.getElementsByClassName("setting-verify-img");
    for (let i = 0; i < settingSaviourFirst.length; i++) {
        settingSaviourFirst[i].innerHTML = `
            <span class="verify-txt cont-dark-font">verified</span>
            <div class="verify-img">
                <img src="svg/verifiedtick.svg" class="img-fluid">
            </div>
        `;
    }
    var settingSaviourSecond = document.getElementsByClassName("setting-verify-wrap");
    for (let i = 0; i < settingSaviourSecond.length; i++) {
        settingSaviourSecond[i].innerHTML = `
            <!-- Token image container -->
            <div class="settings-img-wrap" id="verification-setting-reback-img">
                <div class="settings-img">
                    <img src="svg/verifiedtick.svg" class="img-fluid">
                </div>
            </div>		
            <!-- Token container -->
            <div class="hmepg-sub-token-left-wrap">
                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                    <!-- Left container -->
                    <div class="hmepg-sub-token-left-con">
                        <span class="hmepg-token-name settings-token-name unverified one-line">Verification Status</span>
                    </div>
                    <!-- Right container-->
                    <div class="settings-sub-token-right-con unverified">
                        Verified
                    </div>
                </div>			
                <!-- Token line -->
                <div class="hmepg-sub-token-line"></div>				
            </div>
        `;
    }
    // --------------------
    
    // Support page
    document.getElementById("support-verify-btn").innerHTML = `
        <span class="verify-txt">verified</span>
        <div class="verify-img">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("support-bottom").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 p-2">
                    <div class="support-unver-btn cursor cont-dark-font one-line" onclick="document.location.href='./js/support.html'">
                        Go to support
                    </div>
                </div>
            </div>
        </div>
    `;
    // --------------------
    
    // User Information page
    document.getElementById("user-verified-btn").innerHTML = `
        <span class="verify-txt">verified</span>
        <div class="verify-img">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("userinfoslide-note-con").innerHTML = `
        <!--  -->
        <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, Welcome to Binance CoinTracker. Since your already verified, to get the "x6 of your first deposit", the following criteria must be met:</div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="svg/bullet.svg" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">Deposit into your account before Binance archeives the ammount of suscribers and end the promo.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="svg/bullet.svg" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">Make sure it is your first deposit.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Binance CoinTracker will only allow you access this promo once, make sure it counts.</div>
    `;
    // -------------------- 
    
    document.getElementById("community-header-img").innerHTML = `
        <div class="community-header-img-con">
            <img src="svg/verifiedtick.svg" class="img-fluid">
        </div>
    `;

    // Verification page 
    var settingitself = document.getElementsByClassName("verification-lg-txt");
    for (let i = 0; i < settingitself.length; i++) {
        settingitself[i].innerHTML = `
            <div class="weef">
                <!-- User information slide info container -->
                <div class="container">
                    <div class="userinfoslide-info-wrap ver-margin">
                        <!-- Image -->
                        <div class="userinfoslide-info-img">
                            <img src="svg/user.svg" class="img-fluid">
                        </div>
                        <div class="userinfoslide-info"><span class="user-personal-name"></span> Binance</div>
                        <div class="assets-unverified-btn" style="margin: 0px" >
                            <span class="verify-txt">verified</span>
                            <div class="verify-img">
                                <img src="svg/verifiedtick.svg" class="img-fluid">
                            </div>
                        </div>
                    
                        <div class="userinfoslide-note-txt ver-margine">Dear <span class="user-personal-name"></span>, you have completed your KYC (Know Your Customer) with us Binance CoinTracker and your <span style="font-weight: 700;">"x6 of your first deposit"</span> promo has been activated. Your'e now clear to deposit.</div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-6 p-2">
                            <div class="unver-btn one-line cursor" onclick="HomeToAddToken()">
                                Fund Account
                            </div>
                        </div>
                        <div class="col-6 p-2">
                            <div class="cursor one-line cont-dark-font support-unver-btn" onclick="document.location.href='./js/support.html'">
                                Go to support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    // -------------------- 
    
                        

    // -------------------- Eye for home - PAGE --------------------         
        //   
        var change = 1;
        document.getElementById("eyeHome").addEventListener("click", function() {
            change++;
            if (Number(change) % 2 === 0 ) {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                document.getElementById("div-eye-cover").style.display = "flex";
            } else {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$${binanceBalance}`;
                document.getElementById("div-eye-cover").style.display = "none";
            };
        });
        
        // -------------------- 
    //  -------------------- -------------------- --------------------

    intervalTiming();

    var transactPrint = "";
    if (transactionArray === undefined){
        //
        document.getElementById("transaction-history-firebase").innerHTML = `
            <div class="hmepg-token-img-txt one-line">No Transactions has been made yet</div>
            <!-- Images -->
            <div class="transaction-none-display-img">
                <img src="svg/binance.svg" class="img-fluid">
            </div>
        `;
    } else {
        for (let i in transactionArray) {
            // Print Javascript
            transactPrint += `
                <div class="transaction-token-main-wrap">
                    <!-- Token image container -->
                    <div class="transaction-token-img-wrap">
                        <img src="svg/token/${CryptoLocalData[transactionArray[i].id].img}.svg" class="img-fluid">
                    </div>
                    
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap cursor">
                        <div class="hmepg-main-token-con hmepg-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name line-height one-line">${transactionArray[i].topic}</span>
                                <span class="line-height">
                                    <span class="transaction-token-date one-line">${getNthWord(transactionArray[i].date, 1)} ${getNthWord(transactionArray[i].date, 2)}, ${getTimeFormat(getNthWord(transactionArray[i].date, 4))}</span>
                                </span>
                            </div>
                            <!-- Right container-->
                            <div class="transaction-token-right-con">
                                <span class="transaction-token-price line-height one-line">${transactionArray[i].amount}</span>
                                <div class="transaction-token-date">${transactionArray[i].type} · <img src="svg/${transactImg(transactionArray[i].status)}.svg" class="transactional-img"></div>
                            </div>
                        </div>
                        
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>
                    </div>
                </div>
            `;
        }
        //
        document.getElementById("transaction-history-firebase").innerHTML = transactPrint;
    }
}
//
function transactImg(element){
    var transImg;
    if(element === true){
        return transImg = `verifiedtick`;
    } else if(element === false){
        return transImg = `bulletred`;
    } else{
        return transImg = `loading`;
    }
}
//
function transactHistoryToken(){
    var transactPrint = "";
    
    for (let i in transactionArray) {
        // Print Javascript
        transactPrint += `
            <div class="transaction-token-main-wrap transaction-history-display hide-transaction-display" id="${transactionArray[i].id}">
                <!-- Token image container -->
                <div class="transaction-token-img-wrap">
                    <img src="svg/${transactImg(transactionArray[i].status)}.svg" class="img-fluid">
                </div>
                
                <!-- Token container -->
                <div class="hmepg-sub-token-left-wrap cursor">
                    <div class="hmepg-main-token-con hmepg-main-token-con-pad">
                        <!-- Left container -->
                        <div class="hmepg-sub-token-left-con">
                            <span class="hmepg-token-name line-height one-line">${transactionArray[i].topic}</span>
                            <span class="line-height">
                                <span class="transaction-token-date one-line">${getNthWord(transactionArray[i].date, 1)} ${getNthWord(transactionArray[i].date, 2)}, ${getTimeFormat(getNthWord(transactionArray[i].date, 4))}</span>
                            </span>
                        </div>
                        <!-- Right container-->
                        <div class="transaction-token-right-con">
                            <span class="transaction-token-price line-height one-line">${transactionArray[i].amount}</span>
                            <div class="transaction-token-date">${transactionArray[i].type}</div>
                        </div>
                    </div>
                    
                    <!-- Token line -->
                    <div class="hmepg-sub-token-line"></div>
                </div>
            </div>
        `;
    }
    //
    document.getElementById("transaction-history-token").innerHTML = transactPrint;

    
    // Display Comment container per Date
    var chatDisplayDate = document.getElementsByClassName("transaction-history-display");
    var chatDisplayDateL = document.getElementsByClassName("transaction-history-display").length;
    for (let i = 0; i < chatDisplayDate.length; i++) {
        if (chatDisplayDate[i].id === TokenPage) {
            chatDisplayDate[i].classList.remove("hide-transaction-display");
        } else if (chatDisplayDate[i].id !== TokenPage) {
            chatDisplayDate[i].classList.add("transaction-display-marker");
        }
    }
    var displayNone = document.getElementsByClassName("transaction-display-marker").length;
    if(chatDisplayDateL === displayNone){
        document.getElementById("transaction-history-token").innerHTML = `
            <div class="hmepg-token-img-txt one-line">No Transactions has been made yet</div>
            <!-- Images -->
            <div class="transaction-none-display-token-img">
                <img src="svg/binance.svg" class="img-fluid">
            </div>
        `;
    }
}
// -------------------- 

// 
function isUnverified() {
    HomeToVerification();
    communityNumber();

    // General page
    document.documentElement.style.setProperty('--menu-active', 'rgba(166, 50, 50, 0.4)');
    document.documentElement.style.setProperty('--menu-hover', 'rgba(166, 50, 50, 0.175)');
    document.documentElement.style.setProperty('--unverified-red', 'rgba(166, 50, 50, 1)');
    document.documentElement.style.setProperty('--red-overlay', 'rgba(166, 50, 50, 0.2)');
    // -------------------- 

    // Assets page
    document.getElementById("assets-unverified-identifier-1").innerHTML = `
        <span class="verify-txt cont-dark-font">Unverified</span>
        <div class="verify-img">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-unverified-identifier-2").innerHTML = `
        <span class="verify-txt">Unverified</span>
        <div class="verify-img">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("community-header-img").innerHTML = `
        <div class="community-header-img-con">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("assets-card-verify-txt").innerHTML = `
        Get Verified Now!
    `;
    document.getElementById("assets-card-btn-1").setAttribute("onclick", "javascript: AssetsToVerification()");
    // -------------------- 

    // Home page
    document.getElementById("hmepg-nav-verify").innerHTML = `
        <div class="ripple nav-link-btn-ripple"></div>
        <img src="svg/unverifiedtick.svg" class="img-fluid">
    `;
    // -------------------- 

    // Menu page
    document.getElementById("menu-option-right-1").innerHTML = `
        <img src="svg/unverifiedtick.svg" class="img-fluid"></img>
    `;
    menucirlenotification();
    document.getElementById("menu-option-right-2").innerHTML = `
        <div class="menu-option-img">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
        <span class="menu-option-txt" id="menu-option-txted">Verification</span>
    `;
    // -------------------- 

    // Receive page
    document.getElementById("receive-qr-code-un").style.display = "flex";
    document.getElementById("receive-qr-code-v").style.display = "none";
    document.getElementById("receive-wallet-address-un").style.display = "flex";
    document.getElementById("receive-wallet-address").style.display = "none";
    document.getElementById("receive-note-1").style.display = "flex";
    document.getElementById("receive-note-2").style.display = "none";
    document.getElementById("receive-copy-btn").setAttribute("onclick", "javascript: copyTextUn()")
    // --------------------  

    // Send page
    var scantxt = document.getElementsByClassName("scan-bottom-txt");
    var scanbtn = document.getElementsByClassName("scan-bottom-option");
    for (let i = 0; i < scantxt.length; i++) {
        scantxt[i].innerHTML = `
            You have to be a Verified member of Binance CoinTracker before you get enabled.
        `;
    }
    for (let i = 0; i < scanbtn.length; i++) {
        scanbtn[i].innerHTML = `
            <div class="log-yes" onclick="HomeToNotification()">Get verified</div>
            <div class="log-no" onclick="scanout()">Go back</div>
        `;
    }
    // -------------------- 

    // Setting page
    var settingSaviourFirst = document.getElementsByClassName("setting-verify-img");
    for (let i = 0; i < settingSaviourFirst.length; i++) {
        settingSaviourFirst[i].innerHTML = `
            <span class="verify-txt cont-dark-font">Unverified</span>
            <div class="verify-img">
                <img src="svg/unverifiedtick.svg" class="img-fluid">
            </div>
        `;
    }
    var settingSaviourSecond = document.getElementsByClassName("setting-verify-wrap");
    for (let i = 0; i < settingSaviourSecond.length; i++) {
        settingSaviourSecond[i].innerHTML = `
            <!-- Token image container -->
            <div class="settings-img-wrap" id="verification-setting-reback-img">
                <div class="settings-img">
                    <img src="svg/unverifiedtick.svg" class="img-fluid">
                </div>
            </div>		
            <!-- Token container -->
            <div class="hmepg-sub-token-left-wrap">
                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                    <!-- Left container -->
                    <div class="hmepg-sub-token-left-con">
                        <span class="hmepg-token-name settings-token-name unverified one-line">Verification Status</span>
                    </div>
                    <!-- Right container-->
                    <div class="settings-sub-token-right-con unverified">
                        Unverified
                    </div>
                </div>			
                <!-- Token line -->
                <div class="hmepg-sub-token-line"></div>				
            </div>
        `;
    }
    // --------------------
    
    // Support page
    document.getElementById("support-verify-btn").innerHTML = `
        <span class="verify-txt">unverified</span>
        <div class="verify-img">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("support-bottom").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6 p-2">
                    <div class="unver-btn one-line cursor" onclick="HomeToNotification()">
                        Get verified now
                    </div>
                </div>
                <div class="col-6 p-2">
                    <div class="cursor one-line support-unver-btn cont-dark-font" onclick="document.location.href='./js/support.html'">
                        Go to support
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // User Information page
    document.getElementById("user-verified-btn").innerHTML = `
        <span class="verify-txt">unverified</span>
        <div class="verify-img">
            <img src="svg/unverifiedtick.svg" class="img-fluid">
        </div>
    `;
    document.getElementById("userinfoslide-note-con").innerHTML = `
        <!--  -->
        <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, Welcome to Binance CoinTracker. to get the "x6 of your first deposit", The following criterias must be met:</div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="svg/bullet.svg" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">The promo is only available for verified accounts on Binance CoinTracker. So in order for a user to get access, you must first be verified with us.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-step">
            <div class="userinfoslide-note-step-icon">
                <img src="svg/bullet.svg" class="img-fluid">
            </div>
            <div class="userinfoslide-note-txt userinfoslide-note-mar">To get verified, all you have to do is contact our 24/7 available support system.</div>
        </div>
        <!--  -->
        <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Binance CoinTracker "x6 of your first deposit" will be available to all users until the promo hits it's target.</div>
    `;
    // -------------------- 

    // Verification page 
    var settingitself = document.getElementsByClassName("verification-lg-txt");
    for (let i = 0; i < settingitself.length; i++) {
        settingitself[i].innerHTML = `
            <div class="container pb-5">
                <!--  -->
                <div class="rulespolicy-txt">VERIFICATION PROCESS</div>
            
                <!--  -->
                <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, in order to complete KYC (Know Your Customer) with Binance CoinTracker to start <span style="font-weight: 700;">"x6 of your first deposit"</span> promo. Follow the steps below:</div>
                <!--  -->
                <div class="userinfoslide-note-step">
                    <div class="userinfoslide-note-step-icon">
                        <img src="svg/bullet.svg" class="img-fluid">
                    </div>
                    <div class="userinfoslide-note-txt userinfoslide-note-mar">Enter your Email you used to register with us.</div>
                </div>
                <!--  -->
                <div class="userinfoslide-note-step">
                    <div class="userinfoslide-note-step-icon">
                        <img src="svg/bullet.svg" class="img-fluid">
                    </div>
                    <div class="userinfoslide-note-txt userinfoslide-note-mar">Send a photo of one of the listed documents. Driver’s License, National ID Card, Voter’s card, International passport, Certificate of Origin, Birth certificate or Refugee ID card.</div>
                </div>
                <!--  --> <!--  -->
                <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Please make sure to submit your correct email and also your above mentioned valid document otherwise, you will not be verified.</div>

                <!--  -->
                <div class="send-address-input-wrap">
                    <input placeholder="Email..." onkeyup="getEmail(event)" type="email" name="img" id="fileUser" class="send-input" required>
                    <div class="send-input-absolute cont-dark-font"><span class="user-personal-name cont-dark-font"></span>, re-enter Email</div>
                </div>
                <div class="send-address-input-wrap">
                    <input type="file" onchange="getFile(event)" name="img" accept"image/*" id="fileInp" class="inpFile cursor send-input" required>
                    <div class="send-input-absolute">Choose Validation Image</div>
                </div>
                <div class="user-validation-btn cont-dark-font" onclick="submidverifyid()">UPLOAD IMAGE</div>
            </div>
        `;
    };
    // -------------------- 
    // -------------------- 
    
                        

    // -------------------- Eye for home - PAGE --------------------         
        //   
        var change = 1;
        document.getElementById("eyeHome").addEventListener("click", function() {
            change++;
            if (Number(change) % 2 === 0 ) {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
                document.getElementById("div-eye-cover").style.display = "flex";
            } else {
                document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$0.00`;
                document.getElementById("div-eye-cover").style.display = "none";
            };
        });
        
        // -------------------- 
    //  -------------------- -------------------- --------------------
}
// -------------------- 




// Balance container
var binanceBalanceCalc;
var binanceBalance;
var valKey;
function soverign() {
    var user = firebase.auth().currentUser;
    firebase.database().ref('User').on("value", function(snapshot) {
        snapshot.forEach(childSnapshot => {
            let dataCon = childSnapshot.val();
            if(dataCon.uid === user.uid) {
                valKey = childSnapshot.key
            }
        })
    })
}
function intervalTiming() {
    binanceBalanceCalc = (Number(CryptoLocalData[0].balance) * Number( CryptoLocalData[0].price)) + (Number(CryptoLocalData[1].balance) * Number(CryptoLocalData[1].price)) + (Number(CryptoLocalData[2].balance) * Number(CryptoLocalData[2].price)) + (Number(CryptoLocalData[3].balance) * Number(CryptoLocalData[3].price)) + (Number(CryptoLocalData[4].balance) * Number(CryptoLocalData[4].price)) + (Number(CryptoLocalData[5].balance) * Number(CryptoLocalData[5].price)) + (Number(CryptoLocalData[6].balance) * Number(CryptoLocalData[6].price)) + (Number(CryptoLocalData[7].balance) * Number(CryptoLocalData[7].price)) + (Number(CryptoLocalData[8].balance) * Number(CryptoLocalData[8].price)) + (Number(CryptoLocalData[9].balance) * Number(CryptoLocalData[9].price)) + (Number(CryptoLocalData[10].balance) * Number(CryptoLocalData[10].price)) + (Number(CryptoLocalData[11].balance) * Number(CryptoLocalData[11].price)) + (Number(CryptoLocalData[12].balance) * Number(CryptoLocalData[12].price));
    binanceBalance = binanceBalanceCalc.toLocaleString();
    document.getElementById("user-balance").innerHTML = `$${binanceBalance}`;
    // Asset
    document.getElementById("assetaccountbal").innerHTML = `
        $${binanceBalance}
    `;
}





// -------------------- SEND - PAGE -------------------- 
    function sendAmountAddress() {        
        //  
        var sendAddress = document.getElementById("send-input-address").value;
        // 
        if (sendAddress.length > 10) {
            document.getElementById("send-input-wrap-script").innerHTML = `
                <input type="number" placeholder="..." autocomplete="off" class="send-input" id="send-input" onkeyup="sendAmount()" required>
            `;
        } else {
            document.getElementById("send-input-wrap-script").innerHTML = `
                <input type="number" placeholder="..." autocomplete="off" class="send-input" id="send-input" onkeyup="sendAmount()" readonly>
            `;
            document.getElementById("send-parent-exchange").innerHTML = `<div id="send-input-exchange" class="one-line">≈ $0</div> <div id="send-bottom-txt" style="visibility: hidden;">Amount exceeds balance</div>`
            document.getElementById("send-convert-wrap-id").innerHTML = `
                <div class="send-convert-sm-txt one-line">Fee≈ <div id="tip-token" class="one-line"> 0.0</div>/<div id="tip-curr" class="one-line">0.00</div> USD</div>
                <div class="send-convert-lg-txt one-line" id="send-zzz-convert-lg-txt">Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD</div>
            `;
            document.getElementById("send-info-btn").innerHTML = `
                <div class="userinfoslide-btn">Send</div>
            `;
        }
    }
    function sendAmount() {
        var txt = Number(CryptoLocalData[TokenPage].price) * Number(document.getElementById("send-input").value);
        var tipCurr = txt * Number(CryptoLocalData[TokenPage].tip);
        var tipToken = tipCurr / Number(CryptoLocalData[TokenPage].price);
        var totalToken = tipToken + Number(document.getElementById("send-input").value);
        var totalCurr = txt + tipCurr;
        // 
        var span = document.getElementById("send-input-exchange");
        var tipCurrLabel = document.getElementById("tip-curr");
        var tipTokenLabel = document.getElementById("tip-token");
        var totalTokenLabel = document.getElementById("total-token");
        var totalCurrLabel = document.getElementById("total-curr");
        //
        var warningtxt = document.getElementById("send-bottom-txt")
        var warning = document.getElementById("send-parent-exchange")
        // 
        span.innerHTML = span.textContent = "≈ $" + Number(txt.toFixed(2)).toLocaleString();
        tipCurrLabel.innerHTML = tipCurrLabel.textContent = Number(tipCurr.toFixed(2)).toLocaleString();
        tipTokenLabel.innerHTML = tipTokenLabel.textContent = Number(tipToken.toFixed(5).toLocaleString());
        totalTokenLabel.innerHTML = totalTokenLabel.textContent = Number(totalToken.toFixed(5)).toLocaleString();
        totalCurrLabel.innerHTML = totalCurrLabel.textContent = Number(totalCurr.toFixed(2)).toLocaleString();
        // 
        soverign()
        var binanceBalanceCalc = (CryptoLocalData[TokenPage].balance * Number(CryptoLocalData[TokenPage].price));
        if(binanceBalanceCalc < txt){
            warning.style.color = "#790303";
            warningtxt.style.visibility ="visible";
            // 
            document.getElementById("send-info-btn").innerHTML = `
                <div class="userinfoslide-btn" onclick="errSendMoney()">Amount Exceeded!</div>
            `;
        } else if(document.getElementById("send-input").value === ``){
            document.getElementById("send-info-btn").innerHTML = `
                <div class="userinfoslide-btn">Send</div>
            `;
        } else{
            warning.style.color = "rgba(75, 181, 67)";
            warningtxt.style.visibility ="hidden";
            soverign()
            // 
            document.getElementById("send-info-btn").innerHTML = `
                <div class="userinfoslide-btn" onclick="sendMoneyAlert()">Are you sure?</div>
            `;
        }
    }
      
    //
    function sendMoneyAlert() {
        document.getElementById("send-notify-wrap-green").style.display = "flex";
        document.getElementById("send-notify-wrap-red").style.display = "none";
        setTimeout(function(){
            document.getElementById("send-notify-wrap-green").style.display = "none";
            document.getElementById("send-notify-wrap-red").style.display = "none";
        }, 5000);
    }
    //
    function clearSendInput(){
        document.getElementById("send-input-wrap-script").innerHTML = `
            <input type="number" placeholder="..." autocomplete="off" class="send-input" id="send-input" onkeyup="sendAmount()" readonly>
        `;
        document.getElementById("send-info-btn").innerHTML = `
            <div class="userinfoslide-btn">Send</div>
        `;
        document.getElementById("send-input-address").value = ``;
        document.getElementById("send-parent-exchange").innerHTML = `<div id="send-input-exchange" class="one-line">≈ $0</div> <div id="send-bottom-txt" style="visibility: hidden;">Amount exceeds balance</div>`
        document.getElementById("send-convert-wrap-id").innerHTML = `
            <div class="send-convert-sm-txt one-line">Fee≈ <div id="tip-token" class="one-line"> 0.0</div>/<div id="tip-curr" class="one-line">0.00</div> USD</div>
            <div class="send-convert-lg-txt one-line" id="send-zzz-convert-lg-txt">Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD</div>
        `;
    }
    //
    function sendFileDate(client) {
        var year = getNthWord(client, 4);
        var month = getNthWord(client, 2);
        var day = getNthWord(client, 3);
        var time = getNthWord(client, 5);
        var result = `${month} ${day}, ${year} ${time}`;
        return result;
    }
    function sendMoney() {
        // 
        var inputVal = Number(document.getElementById("send-input").value);
        var result = Number(CryptoLocalData[TokenPage].balance) - inputVal;
        var sendAddress = document.getElementById("send-input-address").value
        var SendDate = sendFileDate(`${new Date()}`);
        var SendAmount = `-${inputVal} ${CryptoLocalData[TokenPage].symbol}`
        var fileName = fileNameDir(`${SendDate}`);
        if (TokenPage === `0`){
            firebase.database().ref(`User/${valKey}`).update({
                bitcoin: result,
            })
        } else if(TokenPage === `1`){
            firebase.database().ref(`User/${valKey}`).update({
                ethereum: result,
            })
        } else if(TokenPage === `2`){
            firebase.database().ref(`User/${valKey}`).update({
                litecoin: result,
            })
        } else if(TokenPage === `3`){
            firebase.database().ref(`User/${valKey}`).update({
                dogecoin: result,
            })
        } else if(TokenPage === `4`){
            firebase.database().ref(`User/${valKey}`).update({
                tetherusd: result,
            })
        } else if(TokenPage === `5`){
            firebase.database().ref(`User/${valKey}`).update({
                tron: result,
            })
        } else if(TokenPage === `6`){
            firebase.database().ref(`User/${valKey}`).update({
                tetherusdt: result,
            })
        } else if(TokenPage === `7`){
            firebase.database().ref(`User/${valKey}`).update({
                usdcoin: result,
            })
        } else if(TokenPage === `8`){
            firebase.database().ref(`User/${valKey}`).update({
                bnbcoin: result,
            })
        } else if(TokenPage === `9`){
            firebase.database().ref(`User/${valKey}`).update({
                binanceusd: result,
            })
        } else if(TokenPage === `10`){
            firebase.database().ref(`User/${valKey}`).update({
                avalanche: result,
            })
        } else if(TokenPage === `11`){
            firebase.database().ref(`User/${valKey}`).update({
                binanceusdt: result,
            })
        } else if(TokenPage === `12`){
            firebase.database().ref(`User/${valKey}`).update({
                solana: result,
            })
        }
        firebase.database().ref(`User/${valKey}/transaction/${fileName}`).set({
            amount: SendAmount,
            date: SendDate,
            id: TokenPage,
            status: `pending`,
            topic: sendAddress,
            type: `transfer`
        });
        clearSendInput();
        document.getElementById("send-notify-wrap-green").style.display = "none";
        document.getElementById("send-notify-wrap-red").style.display = "none";
        document.getElementById("send-zzz-xxx-ccc").innerHTML = `
            <span style="padding-right: 0.5em;">${ CryptoLocalData[TokenPage].symbol } Balance: </span> ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("token-ccc-exchange-rate").innerHTML = `
            ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $<span>${binanceCounted}</span>
        `;
        transactHistoryToken();
    }

    function errSendMoney() {
        document.getElementById("send-notify-wrap-green").style.display = "none";
        document.getElementById("send-notify-wrap-red").style.display = "flex";
        setTimeout(function(){
            document.getElementById("send-notify-wrap-green").style.display = "none";
            document.getElementById("send-notify-wrap-red").style.display = "none";
        }, 2500);
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 




// -------------------- CONVERT - PAGE -------------------- 
    //
    function displayConvertOption() {
        document.getElementById("convert-notification").style.display = "flex";
        setTimeout(function(){
            document.getElementById("convert-notification").style.display = "none";
        }, 4500);
    }
    function displayConvertNoOption() {
        document.getElementById("convert-notification").style.display = "none";
    }
    //
    function displayConvertExceeded() {
        document.getElementById("exceed-convert-notification").style.display = "flex";
        setTimeout(function(){
            document.getElementById("exceed-convert-notification").style.display = "none";
        }, 4500);
    }
    //  
    var finalConvert;
    var convertInputMain;
    function convertOnlineTokenId(element, compound) {
        finalConvert = `${element}`;
        convertInputMain = `${compound}`
    }
    function addNum(v) { 
        document.getElementById("from-input").value += v;
        var convertInput = document.getElementById("from-input").value;
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        var finalSum = final.toFixed(5);
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
        convertOnlineTokenId(finalSum, convertInput);
        var tokenBalance = Number(CryptoLocalData[from].balance);
        var convertInputBalance = Number(convertInput);
        soverign();
        if( tokenBalance >= convertInputBalance){
            document.getElementById("convert-convert-btn-id").setAttribute("onclick", "javascript: displayConvertOption()");
        } else {
            document.getElementById("convert-convert-btn-id").setAttribute("onclick", "javascript: displayConvertExceeded()");
        }
    };
    //
    function clearNum() {
        document.getElementById("from-input").value = document.getElementById("from-input").value.substr(0,document.getElementById("from-input").value.length-1);
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        var finalSum = final.toFixed(5);
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
        var convertInput = document.getElementById("from-input").value;
        convertOnlineTokenId(finalSum, convertInput);
        var tokenBalance = Number(CryptoLocalData[from].balance);
        var convertInputBalance = Number(convertInput);
        soverign();
        if( tokenBalance >= convertInputBalance){
            document.getElementById("convert-convert-btn-id").setAttribute("onclick", "javascript: displayConvertOption()");
        } else {
            document.getElementById("convert-convert-btn-id").setAttribute("onclick", "javascript: displayConvertExceeded()");
        }
    };
    //
    function displayConvertYesOption() {
        var fromResult = Number(CryptoLocalData[from].balance) - Number(convertInputMain);
        var toResult = Number(CryptoLocalData[to].balance) + Number(finalConvert);
        var result = valKey;
        document.getElementById("convert-available-txt").innerHTML = `
            Available Balance: ${ firebasefiledirsub.bitcoin.toFixed(5) }
        `;
        displayConvertNoOption();
        document.getElementById("from-input").value = ``;
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = `...`;
        // From
        if (from === 0){
            firebase.database().ref(`User/${result}`).update({
                bitcoin: fromResult,
            })
        } else if(from === 1){
            firebase.database().ref(`User/${result}`).update({
                ethereum: fromResult,
            })
        } else if(from === 2){
            firebase.database().ref(`User/${result}`).update({
                litecoin: fromResult,
            })
        } else if(from === 3){
            firebase.database().ref(`User/${result}`).update({
                dogecoin: fromResult,
            })
        } else if(from === 4){
            firebase.database().ref(`User/${result}`).update({
                tetherusd: fromResult,
            })
        } else if(from === 5){
            firebase.database().ref(`User/${result}`).update({
                tron: fromResult,
            })
        } else if(from === 6){
            firebase.database().ref(`User/${result}`).update({
                tetherusdt: fromResult,
            })
        } else if(from === 7){
            firebase.database().ref(`User/${result}`).update({
                usdcoin: fromResult,
            })
        } else if(from === 8){
            firebase.database().ref(`User/${result}`).update({
                bnbcoin: fromResult,
            })
        } else if(from === 9){
            firebase.database().ref(`User/${result}`).update({
                binanceusd: fromResult,
            })
        } else if(from === 10){
            firebase.database().ref(`User/${result}`).update({
                avalanche: fromResult,
            })
        } else if(from === 11){
            firebase.database().ref(`User/${result}`).update({
                binanceusdt: fromResult,
            })
        } else if(from === 12){
            firebase.database().ref(`User/${result}`).update({
                solana: fromResult,
            })
        }
        // To
        if (to === 0){
            firebase.database().ref(`User/${result}`).update({
                bitcoin: toResult,
            })
        } else if(to === 1){
            firebase.database().ref(`User/${result}`).update({
                ethereum: toResult,
            })
        } else if(to === 2){
            firebase.database().ref(`User/${result}`).update({
                litecoin: toResult,
            })
        } else if(to === 3){
            firebase.database().ref(`User/${result}`).update({
                dogecoin: toResult,
            })
        } else if(to === 4){
            firebase.database().ref(`User/${result}`).update({
                tetherusd: toResult,
            })
        } else if(to === 5){
            firebase.database().ref(`User/${result}`).update({
                tron: toResult,
            })
        } else if(to === 6){
            firebase.database().ref(`User/${result}`).update({
                tetherusdt: toResult,
            })
        } else if(to === 7){
            firebase.database().ref(`User/${result}`).update({
                usdcoin: toResult,
            })
        } else if(to === 8){
            firebase.database().ref(`User/${result}`).update({
                bnbcoin: toResult,
            })
        } else if(to === 9){
            firebase.database().ref(`User/${result}`).update({
                binanceusd: toResult,
            })
        } else if(to === 10){
            firebase.database().ref(`User/${result}`).update({
                avalanche: toResult,
            })
        } else if(to === 11){
            firebase.database().ref(`User/${result}`).update({
                binanceusdt: toResult,
            })
        } else if(to === 12){
            firebase.database().ref(`User/${result}`).update({
                solana: toResult,
            })
        }


        //
        var fromTransactionPrice = `-${Number(convertInputMain)} ${CryptoLocalData[from].symbol}`;
        var toTransactionPrice = `+${Number(finalConvert)} ${CryptoLocalData[to].symbol}`;
        var fromTopic = `From ${CryptoLocalData[from].name}`;
        var toTopic = `To ${CryptoLocalData[to].name}`;
        var SendDate = sendFileDate(`${new Date()}`);
        var fileName = fileNameDir(`${SendDate}`);
        var fileNameDown = fileNameDir(`${SendDate}c`);
        // From
        firebase.database().ref(`User/${result}/transaction/${fileName}`).set({
            amount: fromTransactionPrice,
            date: SendDate,
            id: from,
            status: true,
            topic: toTopic,
            type: `convert`
        });
        // To
        firebase.database().ref(`User/${result}/transaction/${fileNameDown}`).set({
            amount: toTransactionPrice,
            date: SendDate,
            id: to,
            status: true,
            topic: fromTopic,
            type: `convert`
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 
    
                        

// -------------------- -------------------- COMMUNITY - PAGE -------------------- --------------------
    // -------------------- Add members to forgot password page --------------------
        // Increment factor
        const memberScrollableElement = document.getElementById('member-scrollbar-event');
        var memberScrollableNumber = 15;
        function memberScrollable() {
            memberScrollableNumber = memberScrollableNumber + 15;
            return memberScrollableNumber
        }
        memberScrollableElement.addEventListener('scroll', function() {
            // Detect when user has scrolled to the bottom
            if (memberScrollableElement.scrollTop + memberScrollableElement.clientHeight >= memberScrollableElement.scrollHeight - 5) {
                memberScrollable();
                if(memberScrollableNumber > memberTotalList){
                    document.getElementById('member-loading').classList.remove('show');
                    document.getElementById("member-end-message").style.display = "flex";
                    document.getElementById("member-loading").style.display = "none";
                } else{
                    document.getElementById('member-loading').classList.add('show')
                    document.getElementById("member-end-message").style.display = "none";
                    document.getElementById("member-loading").style.display = "flex";
                };
            }
        }, { passive: true });
        // --------------------

        // Main code
        var memberTotalList;
        function memberTotalListFunc(params) {
            memberTotalList = params;
        }
        function communityNumber() {
            setInterval(() => {
                var members;
                var messageNum = document.getElementById("message-member-num");
                var forgotNum = document.getElementById("forgot-member-num");
                var bioNum = document.getElementById("bio-member-num");
                firebase.database().ref('members').on('value', function (snapshot){
                    members = snapshot.val();
                })
                // --------------------
                // 
                firebase.database().ref('member').on('value', function(element) {
                    // Convert object to an array of its entries
                    var arrayData = element.val();
                    var arrayLength = element.numChildren();
                    var dataSaver = Object.fromEntries(Object.entries(arrayData).slice(0, memberScrollableNumber));
                    var firebasefiledir = dataSaver;
                    var memberPrint = "";
                    
                    for (let i in arrayData) {
                        if(i === userUid){
                            document.getElementById("owner-member-list-container").innerHTML =   `
                                <div class="send-select-token-main-wrap">
                                    <div class="container">
                                        <div class="add-token-sub-wrap">
                                            <!-- Token image container -->
                                            <div class="message-username" style="background: ${arrayData[i].color};">${arrayData[i].name.at(0)}</div>	
                                            <!-- Token container -->
                                            <div class="hmepg-sub-token-left-wrap">
                                                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                                    <!-- Left container -->
                                                    <div class="hmepg-sub-token-left-con">
                                                        <span class="bio-token-name line-height one-line">${arrayData[i].name}</span>
                                                    </div>
                                                    <!-- Right container-->
                                                    <div class="hmepg-sub-token-right-con convertselect-sub-token-right-con"></div>
                                                </div>		
                                                <!-- Token line -->
                                                <div class="hmepg-sub-token-line"></div>				
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        }
                    }
                    for (let i in firebasefiledir) {
                        memberPrint += `
                            <div class="send-select-token-main-wrap member-page-count-print" id="${i}">
                                <div class="container">
                                    <div class="add-token-sub-wrap">
                                        <!-- Token image container -->
                                        <div class="message-username" style="background: ${firebasefiledir[i].color};">${firebasefiledir[i].name.at(0)}</div>	
                                        <!-- Token container -->
                                        <div class="hmepg-sub-token-left-wrap">
                                            <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                                <!-- Left container -->
                                                <div class="hmepg-sub-token-left-con">
                                                    <span class="bio-token-name line-height one-line">${firebasefiledir[i].name}</span>
                                                </div>
                                                <!-- Right container-->
                                                <div class="hmepg-sub-token-right-con convertselect-sub-token-right-con"></div>
                                            </div>		
                                            <!-- Token line -->
                                            <div class="hmepg-sub-token-line"></div>				
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                    
                    document.getElementById("member-list-container").innerHTML = memberPrint;
                    var displayMember = document.getElementsByClassName("member-page-count-print");
                    var memberNumber = Number(members) * Number(arrayLength);
                    memberTotalListFunc(arrayLength);
                    messageNum.innerHTML = `${nFormatter(memberNumber)}`;
                    forgotNum.innerHTML = `${nFormatter(memberNumber)}`;
                    bioNum.innerHTML = `${nFormatter(memberNumber)}`;
                    for (let i = 0; i < displayMember.length; i++) {
                        if(displayMember[i].id === userUid){
                            displayMember[i].style.display = "none"
                        } 
                    }
                })
            }, 500);
            
            // --------------------
        }
    // -------------------- -------------------- --------------------



    // -------------------- General functions for the Community system --------------------
        function nFormatter(num) {
            if (num >= 1000000000) {
                return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
            }
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
            }
            return num;
        }
        //
        function getNthWord(string, n){
            var words = string.split(" ");
            return words[n-1];
        }
        //
        function getTimeFormat(time){
            var timeSplit = time.split(":");
            var timeNumber = Number(timeSplit[0])
            if (timeNumber >= 12) {
                var timeWrap = timeNumber - 12
                if(timeWrap === 0){
                	var timeDisplay = `${12}:${timeSplit[1]} PM`;
                	return timeDisplay;
                }else{
                	var timeDisplay = `${timeWrap}:${timeSplit[1]} PM`;
                	return timeDisplay;
                }
            } else if(timeNumber < 12) {
                var timeWrap = timeNumber
                if(timeWrap === 0){
                	var timeDisplay = `${12}:${timeSplit[1]} AM`;
                	return timeDisplay;
                }else{
                	var timeDisplay = `${timeWrap}:${timeSplit[1]} AM`;
                	return timeDisplay;
                }
            }
        }
        //
        function monthNumber(month) {
            var monthNum;
            if(month === `Jan`){
                return monthNum = `01`;
            } else if(month === `Feb`){
                return monthNum = `02`;
            } else if(month === `Mar`){
                return monthNum = `03`;
            } else if(month === `Apr`){
                return monthNum = `04`;
            } else if(month === `May`){
                return monthNum = `05`;
            } else if(month === `Jun`){
                return monthNum = `06`;
            } else if(month === `Jul`){
                return monthNum = `07`;
            } else if(month === `Aug`){
                return monthNum = `08`;
            } else if(month === `Sep`){
                return monthNum = `09`;
            } else if(month === `Oct`){
                return monthNum = `10`;
            } else if(month === `Nov`){
                return monthNum = `11`;
            } else if(month === `Dec`){
                return monthNum = `12`;
            } else{
                return monthNum = undefined;
            }
        }
        //
        function fileNameDir(client) {
            var year = getNthWord(client, 3);
            var month = monthNumber(getNthWord(client, 1));
            var day = getNthWord(client, 2).slice(0, -1);
            var time = getNthWord(client, 4).split(`:`);
            var timeResult = `${time[0]}${time[1]}${time[2]}`;
            var result = `${year}${month}${day}${timeResult}`;
            return result;
        }
        function clientFileDate(client) {
            var year = getNthWord(client, 4);
            var month = getNthWord(client, 2);
            var day = getNthWord(client, 3);
            var time = getNthWord(client, 5);
            var result = `${month} ${day}, ${year} ${time}`;
            return result;
        }
        function clientFileNewDate(client) {
            var year = getNthWord(client, 4);
            var month = getNthWord(client, 2);
            var result = `${month}, ${year}`;
            document.getElementById("token-ccc-transfer-con").innerHTML = result;
        }clientFileNewDate(`${new Date()}`)
    // -------------------- --------------------  --------------------



    // -------------------- Message Page container --------------------
        // Increment factor
        const postScrollableElement = document.getElementById('message-conversation-loader');
        var postScrollableNumber;
        var postBoolean = false;
        function postScrollNumberFunc(){
            postScrollableNumber = postTotalList;
        }
        function postScrollable() {
            postScrollableNumber = postScrollableNumber - 10;
            if (postScrollableNumber >= 0){
                return postScrollableNumber;
            }else {
                return postScrollableNumber = 0;
            }
        }
        postScrollableElement.addEventListener('scroll', function() {
            // Detect when user has scrolled to the bottom
            if (postScrollableElement.scrollTop <= 0) {
                postScrollable();
                if(postScrollableNumber === 0){
                    document.getElementById('post-loading').classList.remove('show');
                    document.getElementById("post-end-message").style.display = "flex";
                    document.getElementById("post-loading").style.display = "none";
                } else{
                    document.getElementById('post-loading').classList.add('show')
                    document.getElementById("post-end-message").style.display = "none";
                    document.getElementById("post-loading").style.display = "flex";
                    document.querySelectorAll(".scroll-to-message-post")[9].scrollIntoView();
                };
            }
        }, { passive: true });
        // --------------------

        // -------------------- --------------------
        function dateClass(element){
            var one = getNthWord(element, 1);
            var two = getNthWord(element, 2);
            var three = getNthWord(element, 3);
            var result = `${one}${two}${three}`;
            return result;
        }
        var postTotalList;
        function postTotalListFunc(params) {
            postTotalList = params - 10;
            if(postBoolean === false){
                postScrollNumberFunc()
                postBoolean = true;
            }
        }
        window.setInterval(() => { 
            firebase.database().ref('post').on('value', function(snapshot) {
                postDatabase = snapshot.val();
                var tempPostdata = {};
                for (const i in postDatabase) {
                    const element = postDatabase[i].date;
                    var currentDate = new Date();
                    var expiry = new Date(`${element}`);
                    if (currentDate.getTime() >= expiry.getTime()) {
                        tempPostdata[i] = postDatabase[i];
                    }
                }
                const objLength = Object.keys(tempPostdata).length;
                postTotalListFunc(objLength)
                var dataSaver = Object.fromEntries(Object.entries(tempPostdata).slice(postScrollableNumber, objLength));
                var chatDatabase = dataSaver;
                var chatPrint = "";

                for (let i in chatDatabase) {
               		var commentPostdata = {};
               		var commentMainData = chatDatabase[i].comment;
                	for(let x in commentMainData){
                		const element = commentMainData[x].date;
                		var currentDate = new Date();
                		var expiry = new Date(`${element}`);
                		if (currentDate.getTime() >= expiry.getTime()) {
                			commentPostdata[x] = commentMainData[x]
                		}
                	}
					var commentLength = Object.keys(commentPostdata).length;
                	
                    chatPrint += `
                        <div class="post-parent-main-con">
                            <div class="comm-post-date chat-client-datedisplay hide-date-display ${dateClass(`${chatDatabase[i].date}`)}client" id="${chatDatabase[i].date}">
                                ${getNthWord(chatDatabase[i].date, 2).slice(0, -1)} · ${getNthWord(chatDatabase[i].date, 1)}
                            </div>

                            <div class="comm-message comm-post" onclick="postClickContainer(this)" data-message-id="${i}">
                                <div style="overflow: hidden;">
                                    <img src="${chatDatabase[i].posturl}" class="post-img">
                                    <div class="container">
                                        <div class="post-txt">
                                            ${chatDatabase[i].postmessage}
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="metadata">
                                        	<div class="comm-post-view"><img class="comm-post-view-img" src="svg/eye.svg"><span>${nFormatter(Number(commentLength) * Number(chatDatabase[i].num))}</span></div>
                                            <span class="time message-page-time one-line">${getTimeFormat(getNthWord(chatDatabase[i].date, 4))}</span>
                                        </div>
                                    </div>
                                    <!-- Bottom container -->
                                    <div class="comm-post-line"><div class="container"><div class="comm-seperation-line"></div></div></div>
                                    <div class="container">
                                        <div class="receive-send-link-btn messsage-comment-link-btn">
                                            <div class="receive-send-left-wrap" style="margin-right: 0.75em;align-items: center;">
                                                <div class="comm-left-img">
                                                    <img src="svg/comment.svg" class="img-fluid">
                                                </div>
                                                <span class="comm-comment-txtlink one-line">${nFormatter(commentLength)} Comments</span>
                                            </div>
                                            <div class="comm-right-img" style="transform: rotate(180deg)">
                                                <img src="svg/chevron.svg" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <div class="scroll-to-message-post"></div>
                    `;
                }
                //
                document.getElementById("message-conversation-container").innerHTML = chatPrint;
            })
            // Display Chat container per Date
            var chatDisplayDate = document.getElementsByClassName("chat-client-datedisplay");
            for (let i = 0; i < chatDisplayDate.length; i++) {
                const element = chatDisplayDate[i].id;
                var bioClass = document.getElementsByClassName(`${dateClass(`${element}`)}client`)
                for(var x = 0; x < bioClass.length; x++){
                    bioClass[0].classList.remove("hide-date-display")
                }
                var currentDate = new Date();
                var expiry = new Date(`${element}`);
                if (currentDate.getTime() < expiry.getTime()) {
                    chatDisplayDate[i].style.display = "none"
                }
            }
        }, 1000);
    // -------------------- --------------------  --------------------



    // -------------------- --------------------
        var clientPostUid;
        var numberViews;
        function clientPostId(element) {
            clientPostUid = `${element}`;
        }
        function clientViewsId(views) {
            numberViews = `${views}`;
        }
        function postClickContainer(response) {
            var empId = response.dataset.messageId;
            clientPostId(`${empId}`)
            firebase.database().ref(`post/${empId}`).on('value', snapshot => {
                var commentDatabase = snapshot.val();
                var chatDatabase = commentDatabase;
                let postDate = chatDatabase.date;
                clientViewsId(`${commentDatabase.num}`)
                // 
                document.getElementById("comment-post-txt").innerHTML = `
                    ${chatDatabase.postmessage}
                `;
                // 
                document.getElementById("comment-post-img-sub").innerHTML = `
                    <img src="${chatDatabase.posturl}" class="img-fluid post-img-border">
                `;
                //
                document.getElementById("bio-datecomm-post-id").innerHTML = `
                    ${getNthWord(postDate, 2).slice(0, -1)} · ${getNthWord(postDate, 1)}
                `;
                //
                document.getElementById("bio-comm-time-id").innerHTML = `
                    ${getNthWord(postDate, 3)}
                `;
                //
                document.getElementById("bio-comm-date-format").innerHTML = `
                    ${getTimeFormat(getNthWord(postDate, 4))}
                `;
            })
            // Add chat
            firebase.database().ref(`post/${empId}/comment`).on('value', element => {
                let converse = element.val();
                let commentDatabase = converse;
                addCommentToConversation(commentDatabase)
            })
            CommunityToChat();
        }
    // -------------------- --------------------  --------------------

        
    // -------------------- Add members to forgot password page --------------------
        // Increment factor
        const commentScrollableElement = document.getElementById('comment-conversation-scroll-loader');
        var commentScrollableNumber;
        var commentBoolean = false;
        function commentScrollNumberFunc(){
            commentScrollableNumber = commentTotalList;
        }
        function commentScrollable() {
            commentScrollableNumber = commentScrollableNumber - 8;
            if (commentScrollableNumber >= 0){
                return commentScrollableNumber;
            }else {
                return commentScrollableNumber = 0;
            }
        }
        commentScrollableElement.addEventListener('scroll', function() {
            // Detect when user has scrolled to the bottom
            if (commentScrollableElement.scrollTop + commentScrollableElement.clientHeight >= commentScrollableElement.scrollHeight - 5) {
                commentScrollable();
                if(commentTotalListCount === 0){
                    document.getElementById('comment-loading').classList.remove('show');
                    document.getElementById("comment-end-message").style.display = "none";
                    document.getElementById("comment-loading").style.display = "none";
                    functionCommentId();
                } else if(commentTotalListCount > 0){
                    if(commentScrollableNumber === 0){
                        document.getElementById('comment-loading').classList.remove('show');
                        document.getElementById("comment-end-message").style.display = "flex";
                        document.getElementById("comment-loading").style.display = "none";
                        functionCommentId();
                    } else{
                        document.getElementById('comment-loading').classList.add('show')
                        document.getElementById("comment-end-message").style.display = "none";
                        document.getElementById("comment-loading").style.display = "flex";
                        functionCommentId();
                    };
                }
            }
        }, { passive: true });
        // --------------------

        // Main code
        var commentTotalList;
        var commentTotalListCount;
        function commentTotalListFunc(params) {
            commentTotalList = params - 8;
            commentTotalListCount = params;
            if(commentBoolean === false){
                commentScrollNumberFunc()
                commentBoolean = true;
            }
        }
        
        // Global variable to hold the interval ID
        let functionCommentId;
        // Start Interval
        function startCommentInterval(commentDatabase, snapshot) {
            function innerCommentFunction() { 
                // Comment Loop
                var postDatabase = commentDatabase;
                var tempPostdata = {};
                for (const i in postDatabase) {
                    const element = postDatabase[i].date;
                    var currentDate = new Date();
                    var expiry = new Date(`${element}`);
                    if (currentDate.getTime() >= expiry.getTime()) {
                        tempPostdata[i] = postDatabase[i];
                    }
                }
                const objLength = Object.keys(tempPostdata).length;
                commentTotalListFunc(objLength);
                var dataSaver = Object.fromEntries(Object.entries(tempPostdata).slice(commentScrollableNumber, objLength));
                var user = snapshot;
				
				let keysArray = Object.keys(snapshot);
				
				
                var commentPrint = "";
                for (let i in dataSaver) {
                	
                    if(dataSaver[i].commentid === `dQvWAvA24lQmOJy3AJg4byBDaR23`){
                        commentPrint += `
                            <div class="conversation-container float-left" id="${dataSaver[i].date}">
                                <div class="message-chat-wrap">
                                    <!-- Img -->
                                    <div><div class="admin-message-username"><img src="svg/binance.svg" class="img-fluid"></div></div>
                                    <div class="message received">
                                        <span class="admin-message-username-txt">${user[dataSaver[i].commentid].name} <img src="svg/bluetick.svg" class="admin-blue-tick"></span>
                                        <span class="admin-message-username-comment">${dataSaver[i].comment}</span>
                                        <div class="metadata"><span class="time one-line">${getTimeFormat(getNthWord(dataSaver[i].date, 4))}</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="comment-post-date-con hide-date-display comment-client-datedisplay ${dateClass(`${dataSaver[i].date}`)}clientcomm" id="${dataSaver[i].date}">
                                <div class="comment-post-date-line"></div>
                                <div class="comment-post-date">${getNthWord(dataSaver[i].date, 2).slice(0, -1)} · ${getNthWord(dataSaver[i].date, 1)}</div>
                                <div class="comment-post-date-line"></div>
                            </div>
                        `;
                    } else {
                        if(dataSaver[i].commentid === userUid){
                            commentPrint += `
                                <div class="conversation-container float-right" id="${dataSaver[i].date}">
                                    <div class="message sent">
                                        <div class="client-option-con"><div class="client-option-img" onclick="displayClientOption(this)" data-comment-id="${i}"><img src="svg/dotsb.svg" class="img-fluid"></div></div>
                                        <span class="message-username-comment cont-dark-font">${dataSaver[i].comment}</span>
                                        <div class="metadata"><span class="time time-other one-line">${getTimeFormat(getNthWord(dataSaver[i].date, 4))}</span></div>
                                    </div>
                                </div>
                                
                                <div class="comment-post-date-con hide-date-display comment-client-datedisplay ${dateClass(`${dataSaver[i].date}`)}clientcomm" id="${dataSaver[i].date}">
                                    <div class="comment-post-date-line"></div>
                                    <div class="comment-post-date">${getNthWord(dataSaver[i].date, 2).slice(0, -1)} · ${getNthWord(dataSaver[i].date, 1)}</div>
                                    <div class="comment-post-date-line"></div>
                                </div>
                            `;
                        } else if(dataSaver[i].commentid !== userUid && keysArray.includes(dataSaver[i].commentid)){
                            commentPrint += `
                                <div class="conversation-container float-left" id="${dataSaver[i].date}">
                                    <div class="message-chat-wrap">
                                        <!-- Img -->
                                        <div><div class="message-username" style="background: ${user[dataSaver[i].commentid].color};">${user[dataSaver[i].commentid].name.at(0)}</div></div>
                                        <div class="message received">
                                            <p class="message-username-txt">${user[dataSaver[i].commentid].name}</p>
                                            <span class="message-username-comment">${dataSaver[i].comment}</span>
                                            <div class="metadata"><span class="time one-line">${getTimeFormat(getNthWord(dataSaver[i].date, 4))}</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="comment-post-date-con hide-date-display comment-client-datedisplay ${dateClass(`${dataSaver[i].date}`)}clientcomm" id="${dataSaver[i].date}">
                                    <div class="comment-post-date-line"></div>
                                    <div class="comment-post-date">${getNthWord(dataSaver[i].date, 2).slice(0, -1)} · ${getNthWord(dataSaver[i].date, 1)}</div>
                                    <div class="comment-post-date-line"></div>
                                </div>
                            `;
                        } else if(keysArray.includes(dataSaver[i].commentid)){
                            commentPrint += `
                                <div class="conversation-container float-left" id="${dataSaver[i].date}">
                                    <div class="message-chat-wrap">
                                        <!-- Img -->
                                        <div><div class="message-username" style="background: ${user[dataSaver[i].commentid].color};">${user[dataSaver[i].commentid].name.at(0)}</div></div>
                                        <div class="message received">
                                            <p class="message-username-txt">${user[dataSaver[i].commentid].name}</p>
                                            <span class="message-username-comment">${dataSaver[i].comment}</span>
                                            <div class="metadata"><span class="time one-line">${getTimeFormat(getNthWord(dataSaver[i].date, 4))}</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="comment-post-date-con hide-date-display comment-client-datedisplay ${dateClass(`${dataSaver[i].date}`)}clientcomm" id="${dataSaver[i].date}">
                                    <div class="comment-post-date-line"></div>
                                    <div class="comment-post-date">${getNthWord(dataSaver[i].date, 2).slice(0, -1)} · ${getNthWord(dataSaver[i].date, 1)}</div>
                                    <div class="comment-post-date-line"></div>
                                </div>
                            `;
                        } else if(!keysArray.includes(dataSaver[i].commentid)){
                        	commentPrint += `
                        		<div class="conversation-container float-left">
                        			<div class="message-chat-wrap">
                        				<!-- Img -->
                        				<div><div class="message-username" style="background: #A63232;">U</div></div>
                        				<div class="message admin-comment-receive" id="${dataSaver[i].date}" style="background: #A63232">
                        					<p class="message-username-txt message-username-hover"  style="padding-right: 2em;"> UNDEFINED </p>
                        					<div class="admin-client-option-img" onclick="displayAdminCommentOption(this)" data-admincomm-id="${i}"><img src="svg/dotsb.svg" class="img-fluid"></div>
                        					<span class="message-username-comment">${dataSaver[i].comment}</span>
                        					<div class="metadata"><span class="time one-line">${getTimeFormat(getNthWord(dataSaver[i].date, 4))}</span></div>
                        				</div>
                        			</div>
                        		</div>
                        
                        		<div class="comment-post-date-con hide-date-display admin-comment-client-datedisplay ${dateClass(`${dataSaver[i].date}`)}admincomm" id="${dataSaver[i].date}">
                        			<div class="comment-post-date-line"></div>
                        			<div class="comment-post-date">${getNthWord(dataSaver[i].date, 2).slice(0, -1)} · ${getNthWord(dataSaver[i].date, 1)}</div>
                        			<div class="comment-post-date-line"></div>
                        		</div>
                        `;
                        }
                    }
                }
                // // 
                if(dataSaver === null){
                    document.getElementById("bio-auth-conversation-container").innerHTML = `
                        <div class="hmepg-token-img-txt one-line">No comments on this post yet.</div>
                        <!-- Images -->
                        <div class="community-comment-display-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    `;
                } else if(dataSaver !== null){
                    document.getElementById("bio-auth-conversation-container").innerHTML = commentPrint;
                }
                // Display Comment container per Date
                var chatDisplayDate = document.getElementsByClassName("comment-client-datedisplay");
                for (let i = 0; i < chatDisplayDate.length; i++) {
                    const element = chatDisplayDate[i].id;
                    var bioClass = document.getElementsByClassName(`${dateClass(`${element}`)}clientcomm`)
                    for(var x = 0; x < bioClass.length; x++){
                        bioClass[bioClass.length - 1].classList.remove("hide-date-display")
                    }
                    var currentDate = new Date();
                    var expiry = new Date(`${element}`);
                    if (currentDate.getTime() < expiry.getTime()) {
                        chatDisplayDate[i].style.display = "none"
                    }
                }
                
                var commentCount = objLength;
                document.getElementById("comment-count-number").innerHTML = `${nFormatter(Number(commentCount))}`;
                var viewNumber = (Number(commentCount) * Number(numberViews));
                if(commentCount === 0){
                    document.getElementById("bio-auth-conversation-container").innerHTML = `
                        <div class="hmepg-token-img-txt one-line">No comments on this post yet.</div>
                        <!-- Images -->
                        <div class="community-comment-display-img">
                            <img src="svg/binance.svg" class="img-fluid">
                        </div>
                    `;
                    document.getElementById("view-count-number").innerHTML = `${Number(numberViews)}`
                } else{
                    document.getElementById("view-count-number").innerHTML = `${nFormatter(viewNumber)}`;
                }
            } innerCommentFunction();

            return functionCommentId = innerCommentFunction;
        }
        function addCommentToConversation(commentDatabase) {
            firebase.database().ref('member').on('value', function(snapshot) {
                let commentsnapshot = snapshot.val()
                startCommentInterval(commentDatabase, commentsnapshot)
            })
            exitClientCommentBtn();
        }
    // -------------------- --------------------  --------------------



    // -------------------- --------------------
    function getClientComment(e) {
        dcomment = e.target.value;
    }
    //
    function clientComment() {
        var commentId = document.getElementById("client-comment-input-style");
        var commentDate = clientFileDate(`${new Date()}`);
        var fileName = fileNameDir(`${commentDate}cl`);
        firebase.database().ref(`post/${clientPostUid}/comment/${fileName}`).set({
            comment: dcomment,
            commentid: userUid,
            date: commentDate,
        });
        commentId.value = ``;
        document.getElementById("jump-to-id").scrollIntoView();
    }
    // -------------------- --------------------  --------------------



    // -------------------- --------------------
    function editClientCommentBtn() {
        document.getElementById("main-comment-post").style.display ="none";
        document.getElementById("edit-comment-post").style.display ="flex";
        //
        firebase.database().ref(`post/${clientPostUid}/comment/${editClientPostUid}`).on('value', function(snapshot) {
            var user = snapshot.val();
            document.getElementById("client-edit-comment-input-style").value = `${user.comment}`;
        })
        document.getElementById("client-comment-notify").style.display = "none";

        // 
        setTimeout(function(){
            exitClientCommentBtn()
        }, 17500);
    }
    function exitClientCommentBtn() {
        document.getElementById("main-comment-post").style.display ="flex";
        document.getElementById("edit-comment-post").style.display ="none";
    }
    //
    var editClientPostUid;
    function editClientPostId(element) {
        editClientPostUid = `${element}`;
    }
    function displayClientOption(response) {
        var empId = response.dataset.commentId;
        editClientPostId(`${empId}`)
        document.getElementById("client-comment-notify").style.display = "flex";
        setTimeout(function(){
            document.getElementById("client-comment-notify").style.display = "none";
        }, 4500);
    }
    // -------------------- 
    function editClientInput(e) {
        dcommentEdit = e.target.value;
    }
    //
    function editClientComment(){
        var commentEditId = document.getElementById("client-edit-comment-input-style");
        exitClientCommentBtn();
        firebase.database().ref(`post/${clientPostUid}/comment/${editClientPostUid}`).update({
            comment: dcommentEdit
        });
        commentEditId.value = ``;
    }
    //
    function clientDeleteDisplayAbsolute() {
        document.getElementById("client-delete-con").style.display = "flex";
        document.getElementById("client-comment-notify").style.display = "none";
        setTimeout(function(){
            document.getElementById("client-delete-con").style.display = "none";
        }, 9000);
    }
    function clientDeleteAbsolute() {
        document.getElementById("client-delete-con").style.display = "none";
    }
    //
    function deleteClientComment(){
        firebase.database().ref(`post/${clientPostUid}/comment/${editClientPostUid}`).remove();
        clientDeleteAbsolute();
    }
    // -------------------- --------------------  --------------------



    // -------------------- --------------------
    function scrollChatButton() {
        var elem = document.getElementById("client-side-scrollpoint");
        elem.scrollIntoView()
    }
    function scrollCommentButton() {
        var elem = document.getElementById("client-side-comment-scrollpoint");
        document.getElementById("client-comment-notify").style.display = "none";
        elem.scrollIntoView()
    }
    // -------------------- --------------------  --------------------
// -------------------- -------------------- -------------------- -------------------- --------------------  
