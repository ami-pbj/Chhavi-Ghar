import React from 'react';
import './FoodData.css';
import Foodlist from './Foodlist';


const FoodData = () => {
  return (
    <div className="food__home">
        {/* <h3>Latest Movies</h3> */}
        <div className="food__home__row">
                
            <h4 style={{marginTop: 5, marginLeft: 5}}>Universal</h4>
            <Foodlist
                id="49037820"
                title="Popcorn"
                price={150.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://images.squarespace-cdn.com/content/v1/5ee9c1b2f0c31534f55f0570/1592562765414-FPDX1WUTNSEKCC32IF7A/popcorn.jpg?format=2500w"
            />

            <h4 style={{marginTop: 20, marginLeft: 5}}>Traditional</h4>
            <Foodlist
                id="4903851"
                title="Bengal: Ghugni Chaat"
                price={30.00}
                stock="High in Demand"
                nostock=""
                rating={5}
                image="https://i0.wp.com/naturallynidhi.com/wp-content/uploads/2019/01/InstantPotKolkataGhughniChaat_1.jpg?w=2520&ssl=1"
            />
            <Foodlist
                id="4903852"
                title="Bengal: Beguni"
                price={30.00}
                stock="High in Demand"
                nostock=""
                rating={5}
                image="https://images.herzindagi.info/image/2023/Apr/beguni-snack-recipe.jpg"
            />
            <Foodlist
                id="4903853"
                title="Bengal: Piyaji"
                price={30.00}
                stock="High in Demand"
                nostock=""
                rating={5}
                image="https://images.herzindagi.info/image/2023/Apr/piyaji.jpg"
            />
            <Foodlist
                id="4903854"
                title="Bengal: Mochar Chop"
                price={30.00}
                stock="High in Demand"
                nostock=""
                rating={5}
                image="https://images.herzindagi.info/image/2023/Apr/mochar-chop.jpg"
            />

            <h4 style={{marginTop: 20, marginLeft: 5}}>Country's Best</h4>
            <Foodlist
                id="4903855"
                title="India: Samosa"
                price={50.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/01/samosa.jpg"
            />
            <Foodlist
                id="4903856"
                title="India: Vada Pav"
                price={50.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://cdn.shopify.com/s/files/1/0051/4159/4210/files/Vada_Pav_480x480.jpg?v=1655816892"
            />
            <Foodlist
                id="4903857"
                title="India: Pakora"
                price={50.00}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://cdn.shopify.com/s/files/1/0051/4159/4210/files/Pakora_480x480.jpg?v=1655816847"
            />
            <Foodlist
                id="49538098"
                title="Indonesia: Fish and chips"
                price={100.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/11/asset/buzzfeed-prod-web-06/sub-buzz-3815-1532444431-5.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"
            />
            <Foodlist
                id="49538099"
                title="Hong Kong: Roasted cuttlefish balls"
                price={110.00}
                stock=""
                nostock="Limited"
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/25/11/asset/buzzfeed-prod-web-04/sub-buzz-414-1532533144-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"
            />
            <Foodlist
                id="49538235"
                title="Barbados: Samosas"
                price={80.00}
                stock="Available"
                nostock=""
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/25/10/asset/buzzfeed-prod-web-02/sub-buzz-30869-1532530513-1.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538236"
                title="Canada: Poutine"
                price={100.00}
                stock=""
                nostock="Limited"
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/23/17/asset/buzzfeed-prod-web-02/sub-buzz-3094-1532382901-1.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538237"
                title="New York, USA: Cheddar biscuits"
                price={150.00}
                stock="Available"
                nostock=""
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/11/asset/buzzfeed-prod-web-01/sub-buzz-20917-1532447855-1.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538238"
                title="Hawaii, USA: Popcorn with rice crackers and seaweed flakes"
                price={150.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/11/asset/buzzfeed-prod-web-06/sub-buzz-6820-1532446689-6.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538239"
                title="Colombia: Sushi"
                price={100.00}
                stock="Available"
                nostock=""
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/25/11/asset/buzzfeed-prod-web-02/sub-buzz-32069-1532531467-1.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538240"
                title="Sweden: BYOSnacks"
                price={100.00}
                stock=""
                nostock="Limited"
                rating={4}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/13/asset/buzzfeed-prod-web-04/sub-buzz-7224-1532452276-1.jpg?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538241"
                title="Denmark: A candy bar"
                price={50.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/23/18/asset/buzzfeed-prod-web-04/sub-buzz-1712-1532383462-5.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538242"
                title="Minnesota, USA: Gourmet burgers and cocktails"
                price={100.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/11/asset/buzzfeed-prod-web-01/sub-buzz-20034-1532447707-13.png?crop=592%3A391%3B0%2C0&downsize=400:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538243"
                title="Korea: Butter Squid"
                price={150.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/26/11/asset/buzzfeed-prod-web-06/sub-buzz-7488-1532617785-2.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538244"
                title="Denmark: Beer"
                price={200.00}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/12/asset/buzzfeed-prod-web-01/sub-buzz-30508-1532450766-10.png?downsize=600:*&output-format=auto&output-quality=auto"
            />
            <Foodlist
                id="49538245"
                title="Spain: Red wine and Coca-Cola"
                price={250.00}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/13/asset/buzzfeed-prod-web-05/sub-buzz-26461-1532451866-9.png?downsize=600:*&output-format=auto&output-quality=auto"
            />

            <h4 style={{marginTop: 20, marginLeft: 5}}>All Around</h4>
            <Foodlist
                id="49538246"
                title="Chocolate"
                price={150}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/layered-chocolate-bars.jpg"
            />
            <Foodlist
                id="49538247"
                title="Ice Cream"
                price={200.00}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/Classic-Baskin-Robbins-Vanilla-Ice-Cream-Recipe.jpg"
            />
            <Foodlist
                id="49538248"
                title="Trail Mix"
                price={300}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/10/trail-mix-recipe-scaled.jpg"
            />
            <Foodlist
                id="49538249"
                title="Nachos"
                price={100}
                stock="Available"
                nostock=""
                rating={4}
                image="https://recipes.net/wp-content/uploads/2020/03/Copycat-Hooters-Tex-Mex-Nachos-Recipe-1.jpg"
            />
            <Foodlist
                id="49538345"
                title="Chicken and Fries"
                price={250}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/Homestyle-Chicken-and-French-Fries-Recipe.jpg"
            />
            <Foodlist
                id="49538346"
                title="Hotdog"
                price={250}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/Hot-Dogs-Under-Wrap.jpg"
            />
            <Foodlist
                id="49538347"
                title="Pizza"
                price={200}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/Crispy-Blaze-Pizza-Build-Your-Own-Pizza-scaled.jpg"
            />
            <Foodlist
                id="49538348"
                title="Milkshake"
                price={70}
                stock=""
                nostock="Limited"
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/Oreo-Milkshake-Recipe.jpg"
            />
            <Foodlist
                id="49538349"
                title="Bubble Milk Tea"
                price={100}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2021/02/jasmine-milk-tea-2048x1360.jpg"
            />
            <Foodlist
                id="49538450"
                title="Iced Coffee"
                price={100}
                stock="Available"
                nostock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/vietnamese-iced-coffee-1536x1022.jpg"
            />
            <Foodlist
                id="23445451"
                title="Soda"
                price={50}
                nostock="Limited"
                stock=""
                rating={5}
                image="https://recipes.net/wp-content/uploads/2020/03/fruit-cream-soda-recipe-scaled.jpg"
            />
                
        </div>
    </div>
  )
}

export default FoodData