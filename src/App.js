// import logo from "./logo.svg";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Main from "./Main.js";
import UserRecipe from "./UserRecipe.js"

function App() {
  const [meal, setMeal] = useState("");
  const [country] = useState("");

  // const url = 'https://themealdb.com/api/json/v1/1/random.php?a=Croatian';

  // const getArea = () => {
  //   const areas = ['British', 'American', 'French', 'Canadian', 'Jamaican', 'Chinese', 'Dutch', 'Egyptian', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Croatian', 'Norwegian', 'Portuguese', 'Russian', 'Argentinian', 'Spanish', 'Slovakian', 'Thai', 'Arabian', 'Vietnamese', 'Turkish', 'Syrian', 'Algerian', 'Tunisian', 'Polish'];
  //   // if (data === 'American'){
  //     const randomCountry = Math.floor(Math.random() * areas.length)

  //     setCountry(areas[randomCountry]);
  //   // }
  // }

  const url = `https://themealdb.com/api/json/v1/1/random.php`;
  // const url = 'https://themealdb.com/api/json/v1/1/lookup.php?i=52772';
  console.log(country);

  //function to fetch data from MealDB
  const recipePage = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((data) => {
        if (data.meals[0].strArea !== "Unknown") {
          console.log(data.meals[0].strMeal);
          setMeal(data.meals[0]);
        }
      })
      .catch((error) => console.log(error));
  };
  let info = "";
  if (meal.strArea === "British") {
    info = `In Scotland the national dish is haggis . Haggis is comprised of sheep innards boiled in a sheep stomach. In Wales leeks, a relative of the onion, are used in many dishes. Welsh rarebit, comprised of a cheesy sauce over toast, is popular as an appetizer or a light meal. Throughout the United Kingdom, pasties or meat pies are popular. These combine ground meat, vegetables, and potatoes inside a pastry crust. Other favorite meals are fish and chips. Both fish and chips and curry (a dish introduced by immigrants from India) are popular take-out foods. At around 4 P.M. , people in the UK traditionally took a break for tea. Traditional "high tea" included formal preparation of tea, accompanied by an array of finger foods, such as cucumber sandwiches, cheese and chutney (a type of pickle relish) sandwiches, scones, and small, delicate teacakes. To spread on the scones, clotted cream, marmalade, or strawberry jam might be served. People's schedules in the modern UK are sometimes too busy to allow a break for traditional high tea, but most people stop their work activities for an abbreviated tea break at around 4 p.m. For the more casual tea break, tea and biscuits (nicknamed "bikkies") is the common fare. Biscuits are small, crisp cookies, and all English kitchens have a "biscuit tin." Other beverages that the English enjoy include ribena (blackcurrant juice) and squash (sweet fruity beverage similar to Kool-aid).`;
  }
  if (meal.strArea === "American") {
    info =
      'The American food culture, like many countries, has evolved over time. As technology, availability, and migration of people across the country has changed, so has the food we buy, grow, cook, and enjoy. In today’s American food culture, meals are often a social activity shared with friends and family. Getting together with others to share a meal, taking pictures of food and enjoying other photos of food, watching cooking TV shows, and following favorite food bloggers, are all an extension of the modern American food experience. The types of food that Americans eat can vary by household, region, religion, socioeconomic class, or cultural background. Wikipedia explains that American cuisine, “reflects the history of the United States, blending the culinary contributions of various groups of people from around the world, including indigenous American Indians, African Americans, Asians, Europeans, Pacific Islanders, and South Americans. One characteristic of American cooking is the fusion of multiple ethnic or regional approaches into completely new cooking styles." ';
  }
  if (meal.strArea === "French") {
    info =
      "While many traditional, both national and regional, dishes abound in modern French restaurants, French chefs are famous for innovation and using ingredients during the season when they are most abundant or tastiest. French food is not only delicious and beautiful, but eating a meal in a French restaurant is a leisurely delight for all of the senses. Mastering the French cuisine can take decades, but French restaurants bring this artistic gastronomy to patrons all over the world. The elements that make up modern food in France each date from different periods in the history of French cuisine, but they all come together to create one fantastic culinary culture.";
  }
  if (meal.strArea === "Canadian") {
    info = `The favorite foods of Canadians vary slightly from region to region, and are strongly influenced by their family heritage, especially in relation to holiday celebrations. Along the Atlantic coast, seafood and dishes derived from English traditions (except in Quebec) are common. In Quebec, favorite foods come from the area's French heritage. Throughout Canada, maple syrup and maple products are popular, reflecting the significance of the maple tree, whose leaf adorns the flag of Canada. Many families enjoy a visit in early spring to a maple sugar "shack," the special rustic building where sap from maple trees is boiled in a large open pan to make maple syrup.`;
  }
  if (meal.strArea === "Jamaican") {
    info =
      "Jamaican cuisine includes a mixture of cooking techniques, flavors, spices and influences from the indigenous people on the island, and the Spanish, British, Africans, Indian and Chinese who have inhabited the island. It is also influenced by the crops introduced into the island from tropical Southeast Asia. Jamaican cuisine includes various dishes from the different cultures brought to the island with the arrival of people from elsewhere. Other dishes are novel or a fusion of techniques and traditions. In addition to ingredients that are native to Jamaica, many foods have been introduced and are now grown locally. A wide variety of seafood, tropical fruits and meats are available.";
  }
  if (meal.strArea === "Chinese") {
    info = `Throughout its history, China's growing population has been difficult to feed. By A.D. 1000, China's population reached 100 million (more than one-third of the U.S. population in 2000). The Chinese constantly had to adapt new eating habits because of the scarcity of food. Meat was scarce, so dishes were created using small amounts of meat mixed with rice or noodles, both of which were more plentiful. Vegetables were added, and stir-frying, the most common method of cooking, became a way to conserve fuel by cooking food quickly.
    Regional differences in cuisine became noticeable in the 1200s when invaders from neighboring Mongolia swept into China. Cooking styles and customs began to be exchanged between the two countries. As people traveled further from their homes, cooking methods and foods were shared among the different regions within China.`;
  }
  if (meal.strArea === "Arabian") {
    info =
      "The Bedouins of the Arabian Peninsula, Middle East and North Africa rely on a diet of dates, dried fruit, nuts, wheat, barley, rice, and meat. The meat comes from large animals such as cows, sheep, and lambs. They also eat dairy products: milk, cheese, yoghurt, and buttermilk (labneh).";
  }
  if (meal.strArea === "Vietnamese") {
    info = `Vietnamese recipes use lemongrass, ginger, mint, Vietnamese mint, long coriander, Saigon cinnamon, bird's eye chili, lime, and Thai basil leaves.[1] Traditional Vietnamese cooking has often been characterised with using fresh ingredients, not much use of dairy nor oil, interesting textures, and the use of herbs and vegetables. A leading soy sauce manufacturer's research confirms that fish sauce (nước mắm) is the predominant table sauce in Vietnamese homes, where it captures over 70% of the market, while the market share for soy sauce is under 20%.[2] It is also low in sugar and is almost always naturally gluten-free, as many of the dishes are made with rice noodles, rice papers and rice flour instead of wheat.`;
  }
  if (meal.strArea === "Turkish") {
    info =
      "Key ingredients being primarily meat, vegetable and legumes, Turkish meals are generally soupy, consisting of some kind of stew or stock. Hence, bread consumption tends to be way too much among Turks. Turkish kebabs, döner kebab, Turkish ravioli and some eggplant dishes are the trademarks of Turkish cookery. There are over 200 dishes made from eggplant.";
  }
  if (meal.strArea === "Syrian") {
    info =
      "Syrian cuisine reflects influences of Greek, Mediterranean, Southwest Asian, Turkish, and French cuisines. Some of the most common dishes of the cuisine are kibbeh (made of bulgur, finely ground meat, minced onions, and spices), hummus, tabbouleh (Levantine vegetarian salad), fattoush (Syrian or Lebanese bread salad), baklava (rich, sweet dessert pastry), sujuk (a spicy sausage), etc. Syrian cheese is well-known. Cookies or biscuits called ka'ak are also prepared and eaten with cheese. Arabic coffee, arak (an alcoholic drink), white coffee, and jallab are some popular Syrian beverages.";
  }
  if (meal.strArea === "Algerian") {
    info =
      'The national dish of Algeria is couscous, steamed semolina wheat served with lamb or chicken, cooked vegetables, and gravy. This is so basic to the Algerian diet that its name in Arabic, ta\'am, translates as "food." Common flavorings include onions, turnips, raisins, chickpeas, and red peppers, as well as salt, pepper, cumin, and coriander. Alternatively, couscous can be served sweet, flavored with honey, cinnamon, or almonds. Lamb also is popular, and often is prepared over an open fire and served with bread. This dish is called mechoui. Other common foods are chorba, a spicy soup; dolma, a mixture of tomatoes and peppers, and bourek, a specialty of Algiers consisting of mincemeat with onions and fried eggs, rolled and fried in batter. The traditional Berber meal among the poorer people is a cake made of mixed grains and a drink mixed together from crushed goat cheese, dates, and water.';
  }
  if (meal.strArea === "Tunisian") {
    info = `Tunisian cuisine is a diverse blend of flavors representative of the country’s past and central location in Northern Africa. While the cuisine varies across regions, Tunisian food usually combines French and African flavors with a spicy kick. Rooted by the country's staple food, couscous, Tunisian dishes often feature fresh seafood or hearty lamb depending on local availability. `;
  }
  if (meal.strArea === "Polish") {
    info =
      'The contemporary Polish cuisine replaced groats being the staple in history with potatoes, while game dishes are replaced today with the pork and the farm poultry. Tomatoes won the great popularity also. Also eating easily available meat increased, while eating giblets reduced. Producing cheap sugar from beet readily drove and replaced honey in baking and desserts. Polish regions have unique menus, but to some extent only. List of regional foods is not so long, and most traditional dishes are considered national. For example chicken broth is associated with Silesia as typical food, and for the main course meat with dumpling. On the other hand tripe and pork chop with cabbage and potatoes could be served in Mazovia. In Greater Poland German-Polish dishes are liked (ajntop; meat jelly known as the aspic or "cold legs"; myrdyrda), whether in Lublin dumplings with the buckwheat groats and the curd cheese are number one. Apart from some of such regional food, main dishes of modern and Old Polish cuisine are universally known and consumed throughout the country.';
  }
  if (meal.strArea === "Dutch") {
    info = `Dutch cuisine is formed from the cooking traditions and practices of the Netherlands. The country's cuisine is shaped by its location in the fertile North Sea river delta of the European Plain, giving rise to fishing, farming (for crops and domesticated animals), and trading over sea, its former colonial empire and the spice trade.
    \n Traditionally, Dutch cuisine is bland,[1] with many vegetables and little meat: Breakfast and lunch are typically bread with toppings like cheese, while dinner is meat and potatoes, supplemented with seasonal vegetables. The diet contains many dairy products and was relatively high in carbohydrates and fat, reflecting the dietary needs of the laborers whose culture moulded the country. Without many refinements, it is best described as rustic, though many holidays are celebrated with special foods.
    \n During the 20th century, Dutch cuisine and diet changed. Influenced by the eating culture of its colonies (particularly the Dutch East Indies), it became more cosmopolitan and most international cuisines are represented in the major cities.`;
  }
  if (meal.strArea === "Egyptian") {
    info = `Egypt has a variety of national dishes. Ful (pronounced "fool," bean paste), tahini (sesame paste), koushari (lentils, macaroni, rice, and chickpeas), aish baladi (a pita-like bread), kofta (spicy, minced lamb), and kebab (grilled lamb pieces) are the most popular.
      \n Aish , the Arabic name for bread, means "life." It accompanies most meals and is served in various forms. The most common bread is pita, usually made with whole wheat (or sometimes white) flour. Long, skinny French-style loaves of bread are also widely eaten throughout the country. Traditional Egyptian cheeses, as well as feta imported from neighboring Greece, are frequently served alongside bread at meals.
      \n Despite the country's dry climate and shortage of arable land (land that can be farmed), Egypt grows a variety of fresh fruits. Mohz (bananas), balah (dates), burtu'aan (oranges), battiikh (melon), khukh (peaches), berkuk (plums), and 'anub (grapes) are commonly grown.
      \n Ful (creamy bean paste made from fava beans), one of the country's several national dishes, is a typical breakfast meal. It is often served in a spicy sauce, topped with an egg. Lunch, normally served between 2 P.M. and 4 P.M. , usually includes meat or fish, rice, bread, and seasonal vegetables. Salad ( mezza, or mezze if more than one is served), topped with typical Middle Eastern fare such as olives, cheese, and nuts, may also be eaten. Meat (usually lamb, chicken, fish, rabbit, or pigeon), vegetables, and bread make up a typical dinner in Egypt. Tea and a dessert, such as baklava (honey pastry), basbousa (cream-filled cake), or konafa (cooked batter stuffed with nuts), are familiar after-dinner treats.
      \n Tea and coffee are widely consumed. Egypt's numerous coffee and teahouses brew very strong coffee and tea (often mint tea), usually offering both full of sugar. Coffeehouses are typically filled with men who gather to play dominoes or backgammon. Coffee is served saada or "bitter" (no sugar) or ziyada or "very sweet." Egyptians also enjoy a drink called sahleb, made from wheat, milk, and chopped nuts.
      \n For a typical dessert, Egyptians may serve mint tea with sugar and a sweet, flaky pastry called baklava.`;
  }
  if (meal.strArea === "Greek") {
    info = `Fresh fruits and vegetables play a large role in the Greek diet. With its long coastline, Greece also relies heavily on fish and seafood. Meat tends to play a less important role. It is often used as an ingredient in vegetable dishes instead of as a main dish. The islands and coastal areas of Greece favor lighter dishes that feature vegetables or seafood. In contrast, the inland regions use more meat and cheese in their cooking.
      \n The Greeks eat bread, grains, potatoes, rice, and pasta nearly every day. Staples of the Greek diet include olives (and olive oil), eggplant, cucumbers, tomatoes, spinach, lentils, and other types of beans, lemons, nuts, honey, yogurt, feta cheese, eggs, fish, chicken, and lamb. The following are some of the most famous Greek dishes: dolmades, (stuffed grape leaves); an egg and lemon soup called avgolemono ; meat, spinach, and cheese pies; moussaka (a meat and eggplant dish); souvlaki (lamb on a skewer); and baklava (nut-and-honey pastry wrapped in layers of thin dough called phyllo ). The national beverage of Greece is strong Turkish coffee, which is served in small cups. Other beverages include ouzo , an alcoholic drink flavored with anise, and a popular wine called retsina.`;
  }
  if (meal.strArea === "Indian") {
    info = `What Indians eat varies by region and religion. Northern Indians eat more flat breads, while those from southern India prefer rice. In coastal states, such as Kerala and Bengal, fish dishes are popular. Chicken and mutton (sheep) are eaten more often in mountain and plains regions. While many Hindus avoid eating beef, Muslims avoid pork. In addition, many Indians—particularly Hindus, Buddhists, and Jains—are vegetarian.
      \n Spices are used in many Indian dishes. When it is hot, spices such as chili peppers and garlic help the body sweat and cool it down. In colder weather, spices such as cloves, cinnamon, ginger, black pepper, cardamom, and nutmeg help warm the body.
      \n Indian cuisine is varied, but many dishes are cooked in a similar way. The preparation starts with frying onion, ginger, garlic or spices such as cumin seeds in oil at a high temperature. Meats, vegetables, flavorings such as yogurt, and spices such as turmeric then are added. The dish then simmers at a low heat until the ingredients are cooked. At the end of the preparation, leafy herbs such as cilantro and flavorings such as lemon juice are added.
      \n This style of preparation may be linked to the traditional use of cow dung. For centuries, families would cook by placing a pan on top of patties made from cow dung. Like the charcoal used in modern-day barbecues, dung initially produces a high heat, but then burns slowly. Although middle-class and urban Indians have electric or gas stoves, many rural households still use cow dung (waste).`;
  }
  if (meal.strArea === "Italian") {
    info = `Although Italians are known throughout the world for pizza, pasta, and tomato sauce, the national diet of Italy has traditionally differed greatly by region. Prior to the blending of cooking practices among different regions, it was possible to distinguish Italian cooking simply by the type of cooking fat used: butter was used in the north, pork fat in the center of the country, and olive oil in the south. Staple dishes in the north were rice and polenta, and pasta was most popular throughout the south. During the last decades of the twentieth century (1980s and 1990s), however, pasta and pizza (another traditional southern food) became popular in the north of Italy. Pasta is more likely to be served with a white cheese sauce in the north and a tomato-based sauce in the south.
    \n Italians are known for their use of herbs in cooking, especially oregano, basil, thyme, parsley, rosemary, and sage. Cheese also plays an important role in Italian cuisine. There are more than 400 types of cheese made in Italy, with Parmesan, mozzarella, and asiago among the best known worldwide. Prosciutto ham, the most popular ingredient of the Italian antipasto (first course) was first made in Parma, a city that also gave its name to Parmesan cheese.`;
  }
  if (meal.strArea === "Japanese") {
    info = `Rice and noodles are the two primary staples of the Japanese diet. Rice, either boiled or steamed, is served at every meal. Noodles come in many varieties. Among the most popular are soba, thin brown noodles made from buckwheat flour; udon, thick white noodles made from wheat flour; and ramen, thin, curly noodles, also made from wheat flour . Soy sauce and other soybean products are also staples in Japan. These include miso (fermented soybean paste) and tofu (a soybean curd that resembles custard). Other common ingredients in Japanese food include bamboo shoots, daikon (a giant white radish), ginger, seaweed, and sesame seed products. Japanese pickles called tsukemono are served at every meal. Seafood is also plentiful in this island nation. Green tea is the national beverage of Japan, although black tea is also available. Sake (SAH-kee, wine made from rice, usually served warm) and beer are also very popular.
    \n Two uniquely Japanese foods are sushi (fresh raw seafood with rice) and sashimi (fresh raw seafood with soy sauce); both rely on freshly caught fish or seafood. Dishes prepared in a single pot ( nabemeno ) are popular throughout Japan. Sukiyaki is a dish made up of paper-thin slices of beef (or sometimes chicken), vegetables, and cubes of tofu cooked in broth. Shabu-shabu is beef and vegetables, also cooked in broth but then dipped in flavorful sauces. Each region has its own selection of favorite foods. People living on the cold northern island of Hokkaido enjoy potatoes, corn, and barbecued meats. Foods in western Japan tend to be more delicately flavored than those in the east.
    \n The Japanese are known for using very fresh ingredients in their cooking. They prefer using fresh, seasonal foods for their meals, buying it the same day it will be cooked. The Japanese are also famous for their skill in arranging food so that it looks beautiful. The people of Japan live long lives and have a low rate of heart disease because of healthy eating habits.`;
  }
  if (meal.strArea === "Kenyan") {
    info = `Kenya is a multi-racial society, the majority of people comprising native ethnic groups. The rest of the population is Asian, Arab, and European. The official languages of Kenya are Swahili and English.
    \n Traditional Kenyan foods reflect the many different lifestyles of the various groups in the country. Most Kenyan dishes are filling and inexpensive to make. Staple foods consist mainly of corn, maize, potatoes, and beans. Ugali (a porridge made of maize) and meat are typically eaten inland, while the coastal peoples eat a more varied diet.
    \n The Maasai, cattle-herding peoples who live in Kenya and Tanzania, eat simple foods, relying on cow and goat by-products (such as the animal's meat and milk). The Maasai do not eat any wild game or fish, depending only on the livestock they raise for food.
    \n The Kikuyu and Gikuyu grow corn, beans, potatoes, and greens. They mash all of these vegetables together to make irio . They roll irio into balls and dip them into meat or vegetable stews.
    \n In western Kenya, the people living near Lake Victoria (the second-largest freshwater lake in the world) mainly prepare fish stews, vegetable dishes, and rice.`;
  }
  if (meal.strArea === "Malaysian") {
    info = `Malay food is strong, spicy and aromatic, combining the rich tastes of the many herbs and spices commonly found in Southeast Asia. It is one of three major cuisines in Malaysia, and together with Chinese and Indian food, continually delight visitors to the country with its incredible variety and flavors.
    The Malays' qualities inform their cooking. Food preparation can be a communal affair among the Malays and it is not uncommon during major festivals or events to see neighbors in a kampong, or village gathered around a big pot stirring up beef rendang or chicken curry.
    Malay food is often eaten with the hands. No implements are needed. Diners simply scoop mouthfuls of rice mixed with curry, vegetables or meat onto their palms and then ladle this into their mouths with the back of their thumbs. It is an art to keep the rice from escaping through the fingers but, with some practice, it can be mastered.
    Rice is the staple in a Malay meal. And just as in many other Southeast Asian countries, it is usually eaten together with meat and vegetable dishes, curries and condiments like the Malay sambal sauce. During a typical Malay lunch or dinner, these dishes are placed in the center of the table to be shared by all the diners.`;
  }
  if (meal.strArea === "Mexican") {
    info = `Corn is the basis of the Mexican diet, as it has been for thousands of years. It can be found in almost every meal, usually in the form of the tortilla (flatbread). Corn can also be boiled to produce pozole , a hearty corn stew. Popular fruits and vegetables are tomatoes, tomatillos (green tomatoes), squash, sweet potato, avocado, mango, pineapple, papaya, and nopales (from the prickly pear cactus). Though beef is consumed, chicken and pork are more common. The variety of chilies includes the widely known jalapeño, as well as the poblano , serrano , and chipotle . Chilies give Mexican cooking a distinctive flavor, which is often enhanced with herbs, such as cilantro and thyme, and spices, including cumin, cinnamon, and cloves. Cheese and eggs round out the diet. Seafood is most common in coastal dishes.
    \n Though Mexican cuisine is a blend of indigenous (Indian) and Spanish influences, most Mexicans continue to eat more native foods, such as corn, beans, and peppers. Such foods are cheap and widely available. Bread and pastries are sold, but the tortilla, homemade or bought daily at the local tortillería (tortilla stand), is the basis of the typical meal. Flour tortillas are also eaten, especially in northern Mexico, but the corn variety is most popular.
    \n American soft drinks, such as Coca-Cola, have become popular in Mexico in recent decades, but fruit-flavored soda drinks are also widely consumed, as are fresh fruit juices, available from street vendors. Sangría , an import from Spain, and beer ( cerveza ) are also popular beverages. Coffee is normally served spiced and sweet ( café de olla ).`;
  }
  if (meal.strArea === "Moroccan") {
    info = `Morocco, unlike most other African countries, produces all the food it needs to feed its people. Its many home-grown fruits and vegetables include oranges, melons, tomatoes, sweet and hot peppers, and potatoes. Five more native products that are especially important in Moroccan cooking are lemons, olives, figs, dates, and almonds. Located on the coast of the Mediterranean Sea, the country is rich in fish and seafood. Beef is not plentiful, so meals are usually built around lamb or poultry.
    \n Flat, round Moroccan bread is eaten at every meal. The Moroccan national dish is the tajine, a lamb or poultry stew. Other common ingredients may include almonds, hard-boiled eggs, prunes, lemons, tomatoes, and other vegetables. The tajine, like other Moroccan dishes, is known for its distinctive flavoring, which comes from spices including saffron, cumin, coriander, cinnamon, ginger, and ground red pepper. The tajine's name is taken from the distinctive earthenware dish with a cone-shaped top in which it is cooked and served. Another Moroccan dietary staple is couscous, made from fine grains of a wheat product called semolina. It is served many different ways, with vegetables, meat, or seafood.
    \n Sweets play a very important role in the Moroccan diet. Every household has a supply of homemade sweet desserts made from almonds, honey, and other ingredients. Mint tea is served with every meal in Morocco. It is sweetened while it is still in the pot.`;
  }
  if (meal.strArea === "Croatian") {
    info = `Throughout history, Croatia has been invaded by numerous empires, each leaving their mark on the culture, including it’s cuisine. 
    Croatian dishes are a mix of influences from Greece, Romans, Venice, the Ottoman Empire, Hungary, Austria, Italy, Germany, and all of the neighboring countries that once formed Yugoslavia.    
    Croatian cuisine spans everything from delicate seafood specialties to hearty meat dishes and stews. For example: the dishes in the northern Istria region include everything from Italian influenced pasta dishes to everyday Austrian schnitzels.  
    Desserts also follow this custom. You will find lovely crepes and neapolitan pastries along side of hungarian cakes, austrian strudels, and an assortment of local specialties.`;
  }
  if (meal.strArea === "Norwegian") {
    info = `Millions of people around the world regularly enjoy seafood from Norway. Our country is known for its cold, clean waters, which provide the perfect habitat for countless species of fish. Inland Norway is home to hundreds of rivers and lakes, and the Norwegian coastline offers excellent deep-sea fishing.
    Catching and preparing top-quality fish has always been a key part of Norwegian culture. Tørrfisk, dried cod, has been a major export for centuries, and has more recently been joined by a thriving industry in fresh salmon and the Arctic cod called skrei.    
    Let's not forget the king of Norwegian seafood — king crab. Although these delicious crabs are available around the world, if you travel to Northern Norway, you can enjoy them when they are freshly caught.`;
  }
  if (meal.strArea === "Portuguese") {
    info =
      "Internationally famous, Portuguese cuisine is mouthwatering, and for many, bacalhau is probably the first delicacy that comes to mind. However, the culinary guide shows that Portuguese food offers many flavors that are distinctive and unique. On the table, it presents a mix between Atlantic and Mediterranean cuisine that includes seafood, bread, cheeses, and olive oils, all with excellent quality. Not to mention the wines and desserts to eat with your prayers!";
  }
  if (meal.strArea === "Russian") {
    info = `Traditional Russian cooking relied on a pech' or oven, rather than a burner as a heat source. The oven had two compartments—one for slow cooking and the other for quick baking. The pech' also heated the homes of the peasants, and therefore occupied a central spot in the main room of the house. Traditional dishes include roasted meats, vegetables, soups, and stews. A staple of the Russian diet is dark, heavy bread. It is not uncommon for a family of four to eat three or four loaves of bread a day. Also popular are bliny (thin pancakes), and a variety of savory and sweet pies called either piroghi (large pies) or pirozhki (small pies). They are usually filled with fish, cheese, jam, cabbage, mushrooms, chopped hard-cooked eggs, or meat. The possibilities are unlimited. These pies are served alone or with soup at lunch. Hot sweetened tea, called chai, is served frequently from a samovar (large brass boiler) that heats water and steeps the tea leaves to form a concentrated mixture.
    Russians eat more fish than most other cultures because, under the Russian Orthodox Church, many days of the year were fasting days and fish was the only meat allowed. Sturgeon is the favorite fish of the Russians, from which black caviar (fish eggs) is collected. Kissel , a piece of stewed fruit thickened with cornstarch with milk poured over it, is a traditional dessert.`;
  }
  if (meal.strArea === "Argentinian") {
    info = `Beef is the national dish of Argentina. There are huge cattle ranches in Argentina, and the gaucho, or Argentine cowboy, is a well-known symbol of Argentine individualism. Many dishes contain meat, but prepared in different ways. A favorite main course is parrillada, a mixed grill of steak and other cuts of beef. Grilled steak is called churrasco , a beef roast cooked over an open fire is called asado , and beef that is dipped in eggs, crumbs, and then fried is called milanesa . Carbonada is a stew that contains meat, potatoes, sweet potatoes, and chunks of corn on the cob.
    \n Because many Argentines are descendents of the Italian immigrants who came to Argentina in the late 1800s, Italian dishes are found throughout the country. Some favorite Italian dishes include pizza, all kinds of pastas (such as spaghetti and ravioli), and ñoquis , (gnocchi—potato dumplings) served with meat and tomato sauce.
    \n Argentines eat more fruit than almost any other group of people in the world. Some favorite fruits include peaches, apricots, plums, pears, cherries, grapes, and tuna , the fruit of a prickly pear cactus.
    \n Empanadas , little pies usually stuffed with beef, vegetables, and cheese, are a favorite dish. These are eaten by hand and they are often enjoyed as a snack, or may be carried to school for lunch. Chimichurri , a dipping sauce, is usually served with empanadas . Because the sauce has to sit for two hours before eating, it is prepared before the empanadas .`;
  }
  if (meal.strArea === "Spanish") {
    info = `Spain's culinary traditions rely on an abundance of locally grown vegetables and fruits as well as meats and poultry. Jamón serrano , a cured ham, and chorizo , a seasoned sausage, are popular. Seafood and fish are popular in coastal areas. Other popular foods are cheeses, eggs, beans, rice, nuts (especially almonds), and bread (a crusty white bread, baked fresh daily, is common). Olive oil and garlic are common ingredients. Spain is also known for its wines, including the rioja , made in the northern province; sherry, a fortified wine that may be dry or sweet; and sangria, wine mixed with fruit and soda water.
    \n The best-known Spanish dish, a stew called paella (pie-AY-ah), originated in Valencia, an eastern province on the Mediterranean Sea. Rice, a main ingredient, is grown in Valencia's tidal flatlands. Though there are numerous variations, paella is usually made of a variety of shellfish (such as shrimp, clams, crab, and lobster), chorizo (sausage), vegetables (tomatoes, peas, and asparagus), chicken and/or rabbit, and long-grained rice. Broth, onion, garlic, wine, pimiento (sweet red pepper), and saffron add flavor to the stew.
    \n Every region has its own distinct cuisine and specialties. Gazpacho, a cold tomato soup, comes from Andalucía in southern Spain. Traditionally, a special bowl called a dornillo, was used to pound the ingredients by hand, but modern Spanish cooks use a blender. Andalusians also enjoy freidurías (fish, such as sole or anchovies, fried in batter). Cataluña (Catalonia), in northeastern Spain, is known for its inventive dishes combining seafood, meat, poultry, and local fruits. In the northern Basque country (país Vasco), fish is important to the diet, with cod, eel, and squid featured prominently. The signature dish of Asturias, in northwestern Spain, is fabada, a bean stew. In the interior regions, such as Castilla, meats play a starring role. Tortilla española, a potato omelet, is served throughout the country. It can be prepared quickly and makes a hearty but simple dinner. Spain's best-known dessert is flan, a rich custard.`;
  }
  if (meal.strArea === "Slovakian") {
    info =
      "Slovak food exhibits much regional variation, but generally is based on soups, stewed and boiled vegetables, stewed fruits, smoked meats (especially sausages), roasted meats, gruels, and dairy dishes. Sheep cheese with small dumplings, bryndzové halušky , is among the most typical Slovak dishes. Traditionally in peasant households, five meals would be taken: early in the morning upon rising ( raňajky ), a snack at about ten A.M. ( desiata ), the main meal of the day at noon ( obed ), another snack around four P.M. ( olovrant ), and supper in the evening after chores ( večera ). Tea with sugar is the most popular hot beverage. Bread is served with every meal, and hot soup is a fixture as the first course at the main noon meal, with meat dishes commonly served at that time as well. The evening meal is usually light and may include bread, cheese, and vegetables. Beer, wine, juices, and carbonated water or flavored sodas are served with most meals. The main distilled beverage is plum brandy ( slivovica ), and borovička (gin) is quite popular.";
  }
  if (meal.strArea === "Thai") {
    info =
      "The flavors found in modern-day Thailand come from ancient history. As early as the 13th century, the Thai people had established what might be considered the heart of Siamese cuisine as we know it today: various types of meat and seafood combined with rice, local vegetables, herbs, and pungent garlic and pepper. Later on, the Chinese brought noodles to Thailand, as well as the most important Thai cooking tool: the steel wok. Thai cuisine is also heavily influenced by Indian spices and flavors, which is evident in its famous green, red, and yellow curries. Impossible to confuse with Indian curries, Thai curries incorporate many Indian spices in their pastes, maintaining their own unique flavors thanks to local ingredients, such as Thai holy basil, lemongrass, and galangal.";
  }
  if (meal.strArea === "Irish") {
    info =
      "Irish culture is steeped in myth, legend, fairytale and folklore. It is not surprising that food and feasts play a central role in many of these tales as Ireland developed primarily as an agricultural society. The four main pagan Celtic festivals were celebrated with feasts and dancing at the change of seasons: Imbolc (February), Beltaine (May), Lughnasa (August), and Samhain (November). Although food has always been an important part of life in Ireland, this culture, as with all things down through the years, has changed dramatically.";
  }
  return (
    <div className="App">
      {/* <p>blah blah blah food dofjakjndfcikjabefkjbawefjh</p> */}
      <Link to='/'>
          <button id='btn1' onClick={recipePage}>Get Random Culture</button>
      </Link>
      <Link to='/recipe'><button id='btn2'>Get Recipe from this Culture</button></Link>
      <Link to='/userrecipe'><button id='btn3'>Write recipe</button></Link>
      <Routes>
        <Route path="/" element={<Main recipePage={recipePage} meal={meal} info={info}/>}/>
          {/* <header className="App-header">
            <img src="logo.jpg" width="200px" alt="logo"></img>
            <h1>Food</h1>
          </header> */}
          {/* {<>
          <div>
            <p>blah blah blah food dofjakjndfcikjabefkjbawefjh</p>
            <button onClick={recipePage}>Get Random Culture</button>
          </div>
          <div>
            {meal.strArea}
          </div>
          <div>
            <h3>Information on this cultures food:</h3>
            <p>{info}</p>
          </div>
          </>} */}
        <Route path="/recipe" element={<Recipe meal={meal} />} />
        <Route path="/userrecipe" element={<UserRecipe />} />
        {/* <Recipe /> */}
      </Routes>
    </div>
  );
}

export default App;
