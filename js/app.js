{
    function hello_world() {
        console.log('Hello World!');
    };

    function double_click(message) {
        console.log(message);
    };

    // onclick="remove_card(this)"
    // function remove_card(e) {
    //     // console.log(e);
    //     // e.remove();
    //     var p_tag = document.createElement('p');
    //     picture_frame.innerText = "I'm a new p tag";
    //     e.appendChild(pictu




    Cookies.set("username", "ChanningTatum");


    var username = Cookies.get("username");
    console.log(username);

    function add_cards() {

        let cards = [
            {
                img_src: 'http://placekitten.com/301',
                title: 'different title'
            }, {
                img_src: 'http://placekitten.com/302',
                title: 'unique title'
            }, {
                img_src: 'http://placekitten.com/303',
                title: 'loud title'
            }, {
                img_src: 'http://placekitten.com/304',
                title: 'quiet title'
            }, {
                img_src: 'http://placekitten.com/305',
                title: 'UGLY title'
            },
        ];

        for (let i = 0; i < cards.length; i++) {
            let new_card = document.createElement('article');
            new_card.classList.add('card_container');

            let new_image = document.createElement('img');
            new_image.src = cards[i].img_src;
            new_card.setAttribute('onclick', 'remove_card(this)')
            new_card.appendChild(new_image);

            let new_title = document.createElement('h1');
            new_title.innerText = cards[i].title;

            new_card.appendChild(new_title);

            parentContainer.appendChild(new_card);
        }


    }





    let picture_frame = document.getElementById('image');
    let smaller = document.getElementById('smaller');
    let smallest = document.getElementById('smallest');

    picture_frame.style.opacity = '50%';
    smaller.style.fontSize = '19px';
    smallest.style.font = 'italic 21px bold';

    let boldIt = document.getElementsByClassName('bold');
    for (let i = 0; i < boldIt.length; i++) {
        boldIt[i].innerText = '😍🤣';
    }

    let card = {
        img_src: 'http://placekitten.com/300',
        title: 'The title of the card'
    };

    let parentContainer = document.getElementById('card_section');
    let newCard = document.createElement('article');
    newCard.setAttribute('onclick', 'remove_card(this)');
    newCard.classList.add('card_container');


    let newImage = document.createElement('img');
    newImage.src = card.img_src;
    newCard.appendChild(newImage);

    let newTitle = document.createElement('h1');
    newTitle.innerText = card.title;

    newCard.appendChild(newTitle);

    parentContainer.appendChild(newCard);

    let cards = [
        {
            img_src: 'http://placekitten.com/301',
            title: 'different title'
        }, {
            img_src: 'http://placekitten.com/302',
            title: 'unique title'
        }, {
            img_src: 'http://placekitten.com/303',
            title: 'loud title'
        }, {
            img_src: 'http://placekitten.com/304',
            title: 'quiet title'
        }, {
            img_src: 'http://placekitten.com/305',
            title: 'UGLY title'
        },
    ];

    for (let i = 0; i < cards.length; i++) {
        let new_card = document.createElement('article');
        new_card.classList.add('card_container');

        let new_image = document.createElement('img');
        new_image.src = cards[i].img_src;
        new_card.setAttribute('onclick', 'remove_card(this)');
        new_card.appendChild(new_image);

        let new_title = document.createElement('h1');
        new_title.innerText = cards[i].title;

        new_card.appendChild(new_title);

        parentContainer.appendChild(new_card);
    }
}

