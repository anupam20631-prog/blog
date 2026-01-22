import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let posts = [];


app.get("/", (req, res) => {
    res.render("home", { heropost,posts });
  });

  // app.get("/post/:id", (req, res) => {
  //   const postId = parseInt(req.params.id);
  //   const post = posts.find(p => p.id === postId);
  //   res.render("post", { post });
  // });

app.get("/post/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.render("post.ejs", { post });
  });



  app.get("/hero", (req, res) => {
    res.render("hero.ejs", { heropost,posts });
  });





  app.get("/new", (req, res) => {
    res.render("new");
  });

  app.post("/create", (req, res) => {
    const newPost = {
      id: postId++,
      title: req.body.title,
      content: req.body.content,
      date: new Date().toDateString()
    };
    posts.push(newPost);
    res.redirect("/");
  });

  app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("edit", { post });
  });

  app.post("/update/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/post/" + post.id);
  });

  app.post("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect("/");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  const heropost = {
    title: "Travel. Relax. Discover.",
    excerpt: "Escape into the world’s most peaceful and breathtaking destinations.",
    image: "/images/hero.jpeg",
    date: "Featured Story"
  };


   posts = [
    {
      id: 1,
      title: "Silky Sands, Turquoise Surf",
      excerpt: "Create a blog post subtitle that summarizes your post in a few short, .",
      image: "/images/post1.jpg",
      date: "Nov 16, 2020",
      content: `<p> "Silky Sands, Turquoise Surf" describes idyllic beaches with fine, soft sand and clear blue-green water, evoking paradise found in places like Whitehaven Beach (Australia) or Kailua Beach (Hawaii), perfect for relaxing, swimming, and water sports, representing a dream destination for many seeking natural beauty and tranquility. </p>
      <p> key characterstics</p>
      <ul><li>Silky Sands: Refers to incredibly fine, soft, and sometimes white sand, like the silica-rich sand at Whitehaven Beach.</li>
      <li>Turquoise Surf: Describes the vibrant blue-green color of the water, often due to shallow depths, coral reefs, or mineral content, seen in places like La Pelosa or Guimaras. 
     </li></ul>
     <hr>
    <p>Examples of Such Destinations:</p>
    <ul><li>Whitehaven Beach (Australia): Famous for its 98% silica sand that stays cool underfoot.</li>
    <li>Kailua Beach (Hawaii): Known for soft white sand and gentle turquoise waters.</li>
    <li>La Pelosa (Sardinia): Offers shallow turquoise waters and white sand.</li>
   <li>Alubihod Beach (Guimaras, Philippines): Features fine, creamy white sand with blue waters. </li>
    </ul><hr>
   <p>Experience:</p>
   <ul><li>These locations are popular for relaxation, swimming, snorkeling, and enjoying the serene beauty of the ocean. </li></ul>
   `
 
    },
    {
      id: 2,
      title: "Essential Spa & Body Treatments",
      excerpt: "Relax your body and mind with the best spa experiences from around the world.",
      image: "/images/post2.jpg",
      date: "Nov 20, 2020",
      content: `
    <p>Essential spa and body treatments are designed to rejuvenate the body, mind, and spirit through relaxation, detoxification, and skin nourishment. These treatments range from massages and exfoliating scrubs to specialized wraps, often utilizing natural ingredients to enhance well-being. </p>
    <hr><p>Key Categories of Body Treatments</p>
    <ul><li>Body Scrubs (Exfoliation): Involves exfoliating the entire body using natural ingredients like sea salt, sugar, coffee grounds, or nut shells mixed with essential oils. This process removes dead skin cells, opens pores, improves circulation, and leaves skin smooth and radiant.</li>
    <li>Body Wraps: A treatment where the body is coated with a therapeutic mask (clay, mud, seaweed) and wrapped in linen or plastic. Wraps are designed to detoxify, hydrate, reduce water retention, and, in some cases, temporarily reduce the appearance of cellulite.</li>
    <li>Body Masks: Similar to facial masks, these use skin-cleansing materials like French clay, mud, or seaweed to detoxify and nourish the skin.</li>
    <li>Dry Brushing: A technique using a natural-bristle brush to stimulate the lymphatic system and exfoliate skin, often performed before a moisturizing massage.</li>
    <li> Hydrotherapy: Uses water—such as hot tubs, mineral baths, or Vichy showers—to relieve muscle pain and induce relaxation. </li></ul>
    <hr><p>Essential Types of Massages</p>
    <ul><li>Swedish Massage: Uses long, gentle, and flowing strokes to relax muscles and improve circulation.</li>
    <li>Aromatherapy Massage: Combines massage with essential oils (e.g., lavender for relaxation, rosemary for energy) to target emotional and physical needs.</li>
    <li>Hot Stone Massage: Heated, smooth stones are placed on specific points of the body to release deep muscle tension.</li></ul>
`
    },
    {
      id: 3,
      title: "Top 5 Beaches in Corfu, Greece",
      excerpt: "Crystal-clear waters, golden sand, and breathtaking views await you.",
      image: "/images/post3.jpg",
      date: "Nov 25, 2020",
      content: `
    <p>
Corfu's top beaches offer stunning Ionian beauty, from the dramatic cliffs of Paleokastritsa (with its boat-accessible coves) and the iconic sandstone formations of Canal d'Amour (Sidari), to the family-friendly, sweeping sands of Agios Georgios Pagon, the vibrant pebble shores of Barbati with watersports, and the unique twin-bay beauty of Porto Timoni (accessible by hike or boat). Other favorites include quiet Avlaki for clear water and Bataria for snorkeling in Kassiopi.
</p>

<hr>

<p>
Here's a brief overview of five must-visit beaches:
</p>

<ul>
  <li>
    <p><strong>Paleokastritsa:</strong> Known for its lush greenery, dramatic coves, and crystal-clear waters, offering boat trips to hidden spots, though some beaches are pebbly.</p>
  </li>

  <li>
    <p><strong>Canal d'Amour (Sidari):</strong> Famous sandstone cliffs forming unique channels; legend says couples swimming together stay forever, with bustling resort amenities nearby.</p>
  </li>

  <li>
    <p><strong>Agios Georgios Pagon:</strong> A long, sandy bay perfect for families, featuring warm, shallow waters on one side and deeper, refreshing water on the other.</p>
  </li>

  <li>
    <p><strong>Barbati:</strong> A popular, organized beach with large pebbles, sparkling blue water, modern bars, sunbeds, and watersports.</p>
  </li>

  <li>
    <p><strong>Porto Timoni:</strong> A breathtaking, secluded twin bay accessible by a scenic hike from Afionas or by boat, offering stunning views and pristine waters.</p>
  </li>
</ul>
`
    },
    {
      id: 4,
      title: "A Weekend in Santorini",
      excerpt: "White houses, blue domes, and unforgettable sunsets.",
      image: "/images/post4.jpg",
      date: "Dec 01, 2020",
      content: `
    <p>
A weekend in Santorini offers a perfect taste of its iconic beauty, focusing on stunning caldera views, exploring charming villages like Oia and Fira, relaxing on unique volcanic beaches (red and black), hiking the Fira–Oia path, and indulging in local wine and cuisine. World-famous sunsets make it ideal for couples or adventurers seeking both natural wonders and relaxation in just a few days.
</p>

<hr>

<p>
Key Experiences:
</p>

<ul>
  <li>
    <p>Oia & Fira: Wander whitewashed alleys, discover blue domes, shop, and dine with breathtaking caldera views.</p>
  </li>
  <li>
    <p>Sunsets: Witness unforgettable sunsets from Oia or other cliffside viewpoints.</p>
  </li>
  <li>
    <p>Volcanic Beaches: Visit the unique Red Beach, White Beach, or black sand beaches like Perissa.</p>
  </li>
  <li>
    <p>Caldera Views: Hike the scenic path between Fira and Oia or take a boat tour around the caldera.</p>
  </li>
  <li>
    <p>Wine Tasting: Sample local Assyrtiko wines at island wineries enriched by volcanic soil.</p>
  </li>
  <li>
    <p>History: Explore ancient Akrotiri, a prehistoric settlement preserved in volcanic ash.</p>
  </li>
</ul>

<hr>

<p>
Tips for a Weekend:
</p>

<ul>
  <li>
    <p>Book Ahead: Flights, accommodation, and popular dinner spots should be reserved in advance.</p>
  </li>
  <li>
    <p>Comfortable Shoes: Essential for hilly terrain and cobblestone streets.</p>
  </li>
  <li>
    <p>Layers: Evenings, especially on boat tours, can get chilly.</p>
  </li>
  <li>
    <p>Culinary Delights: Try local tomatoes, fava, fresh seafood, and traditional yogurt.</p>
  </li>
</ul>

<hr>

<p>
A weekend allows you to experience the highlights of Santorini, but remember to pace yourself and fully soak in the island’s magical atmosphere.
</p>


`
    },
    {
      id: 5,
      title: "Street Food You Must Try in Nepal",
      excerpt: "From sel roti  to mango momo, explore nepali food culture.",
      image: "/images/post5.jpg",
      date: "Dec 05, 2020",
      content: `
   
<p>
Street food in Nepal is a vibrant, affordable, and flavorful blend of Tibetan, Indian, and local Newari influences, best experienced in bustling areas like Kathmandu’s Asan Bazaar or Thamel.
</p>

<hr>

<p>
Here are the must-try items:
</p>

<ul>
  <li>
    <p><strong>Momos (The Quintessential Snack):</strong> Small, steamed or fried dumplings filled with minced meat (buff or chicken) or vegetables, served with a fiery tomato-sesame dipping sauce (achar). Jhol Momo, served in a hot savory soup, is a popular comforting variation.</p>
  </li>

  <li>
    <p><strong>Sel Roti:</strong> A traditional, ring-shaped rice bread deep-fried until golden brown. Crispy outside and soft inside, it is often eaten for breakfast or as a snack with tea, similar to a sweet doughnut.</p>
  </li>

  <li>
    <p><strong>Chatpate:</strong> A spicy, tangy, and highly addictive snack made with puffed rice, instant noodles (Wai Wai), chopped potatoes, onions, chili, and lime juice. A favorite quick bite among locals.</p>
  </li>

  <li>
    <p><strong>Laphing:</strong> A Tibetan-origin cold mung bean noodle dish with a jelly-like, chewy texture, served with soy sauce, garlic, vinegar, and hot chili oil.</p>
  </li>

  <li>
    <p><strong>Sekuwa (Nepali Barbecue):</strong> Grilled meat skewers (chicken, buff, or goat) marinated in local spices and herbs like timur (Sichuan pepper). Smoky, juicy, and often paired with beaten rice.</p>
  </li>

  <li>
    <p><strong>Bara (Wo):</strong> A savory deep-fried lentil pancake made from ground black lentils, often topped with a fried egg or minced meat for a filling, protein-rich snack.</p>
  </li>

  <li>
    <p><strong>Pani Puri:</strong> Small, hollow, crispy spheres filled with spiced mashed potatoes and chickpeas, dipped in sour and spicy water. A refreshing and interactive street snack.</p>
  </li>

  <li>
    <p><strong>Aloo Chop:</strong> Mashed potatoes mixed with local spices, dipped in batter, and deep-fried until crispy — simple yet beloved.</p>
  </li>

  <li>
    <p><strong>Chatamari:</strong> Often called “Nepali Pizza,” this thin rice flour crepe is topped with minced meat, eggs, and vegetables, and is a specialty of the Newari community.</p>
  </li>

  <li>
    <p><strong>Juju Dhau (King Curd):</strong> A thick, creamy, sweetened buffalo milk yogurt served in clay pots, traditional to Bhaktapur and a must-try dessert.</p>
  </li>
</ul>

<hr>

<p>
Tips for Enjoying:
</p>

<ul>
  <li>
    <p>Follow the crowd: Choose stalls with high turnover to ensure freshness.</p>
  </li>
  <li>
    <p>Locations: Visit Asan Bazaar, Indrachowk, and Patan Durbar Square for the best street food experience.</p>
  </li>
  <li>
    <p>Beaten Rice (Chiura): Commonly served with meat dishes, offering a crunchy, dry texture.</p>
  </li>
</ul>

`
    },
    {
      id: 6,
      title: "Relaxing Resorts in Maldives",
      excerpt: "Overwater villas, crystal lagoons, and peaceful island life.",
      image: "/images/post6.jpg",
      date: "Dec 10, 2020",
      content: `
 <p>
Maldives relaxing resorts offer secluded overwater villas and beach huts, turquoise lagoons, pristine beaches, and personalized service for ultimate tranquility. Activities such as snorkeling, spa treatments, sunset cruises, and private dining make them ideal for couples, families, and honeymooners seeking quiet escapes amid stunning natural beauty, often with all-inclusive options to manage costs.
</p>

<hr>

<p>
Key Features for Relaxation:
</p>

<ul>
  <li>
    <p><strong>Seclusion:</strong> Private beach or overwater villas with direct ocean access allow complete immersion in nature.</p>
  </li>

  <li>
    <p><strong>Tranquility:</strong> Small, intimate resorts (such as Cocogiri) or adults-only properties (like Centara Ras Fushi) help minimize crowds.</p>
  </li>

  <li>
    <p><strong>Natural Beauty:</strong> Powder-soft sands, calm lagoons, and vibrant coral reefs rich with marine life including sharks and rays.</p>
  </li>

  <li>
    <p><strong>Wellness:</strong> World-class spas, yoga sessions, fitness centers, and private dining experiences designed for deep relaxation.</p>
  </li>
</ul>

<hr>

<p>
Popular Relaxing Experiences:
</p>

<ul>
  <li>
    <p><strong>Snorkeling & Diving:</strong> Explore colorful reefs directly from your villa or on guided excursions.</p>
  </li>

  <li>
    <p><strong>Sunset Cruises:</strong> Romantic cruises aboard traditional Dhoni boats across calm waters.</p>
  </li>

  <li>
    <p><strong>Sandbank Escapes:</strong> Private picnics or overnight stays under the stars on secluded sandbanks.</p>
  </li>

  <li>
    <p><strong>Water Sports:</strong> Gentle activities like canoeing, paddleboarding, and windsurfing for relaxed adventure.</p>
  </li>
</ul>

<hr>

<p>
Examples of Relaxing Resorts:
</p>

<ul>
  <li>
    <p><strong>Luxury:</strong> Conrad Maldives, Cheval Blanc, Kudadoo Private Island.</p>
  </li>

  <li>
    <p><strong>Intimate / Quiet:</strong> Mirihi, Kandolhu, Cocoa Island, Komandoo, Angaga, Medhufushi.</p>
  </li>

  <li>
    <p><strong>Family-Friendly Relaxation:</strong> Sun Siyam Iru Fushi, Villa Nautica, Lily Beach.</p>
  </li>
</ul>

<hr>

<p>
Tips for a Relaxing Stay:
</p>

<ul>
  <li>
    <p><strong>All-Inclusive:</strong> Opt for packages to better manage food and drink expenses.</p>
  </li>

  <li>
    <p><strong>Resort Size:</strong> Smaller islands typically offer quieter, more peaceful environments.</p>
  </li>

  <li>
    <p><strong>Atoll Choice:</strong> North and South Malé Atolls provide easy access, ideal for shorter trips.</p>
  </li>
</ul>


`
    },
    {
      id: 7,
      title: "A Guide to Solo Travel",
      excerpt: "Why traveling alone can be the most rewarding experience.",
      image: "/images/post7.jpg",
      date: "Dec 15, 2020",
      content: `
  <p>
A guide to solo travel emphasizes planning and safety, starting with a manageable destination, sharing plans with trusted contacts, securing valuables, and researching local customs. Successful solo travel balances structure with spontaneity, allowing you to enjoy both social connections and peaceful solitude.
</p>

<hr>

<p>
Planning & Preparation:
</p>

<ul>
  <li>
    <p><strong>Destination Choice:</strong> Start local or choose destinations with familiar language or culture if you are new to solo travel, expanding as you gain confidence.</p>
  </li>

  <li>
    <p><strong>Research:</strong> Learn about local customs, dress codes, transportation, dining options, and attractions.</p>
  </li>

  <li>
    <p><strong>Documentation:</strong> Carry copies of important documents such as passport and visa, and share your itinerary with a trusted contact.</p>
  </li>

  <li>
    <p><strong>Budget:</strong> Plan realistically based on what you can comfortably afford.</p>
  </li>

  <li>
    <p><strong>Insurance:</strong> Purchase travel insurance for added peace of mind.</p>
  </li>
</ul>

<hr>

<p>
Packing & Logistics:
</p>

<ul>
  <li>
    <p><strong>Pack Light:</strong> Avoid overpacking; most destinations have easy access to laundry services.</p>
  </li>

  <li>
    <p><strong>Essentials:</strong> Pack only what you need based on climate and activities, using compact toiletries.</p>
  </li>

  <li>
    <p><strong>Accommodation:</strong> Choose hostels or B&Bs for social interaction, and book strategically.</p>
  </li>
</ul>

<hr>

<p>
Safety & Well-being:
</p>

<ul>
  <li>
    <p><strong>Share Plans:</strong> Keep someone informed about your location and itinerary.</p>
  </li>

  <li>
    <p><strong>Secure Valuables:</strong> Hide valuables, secure your bag, and avoid carrying all documents together.</p>
  </li>

  <li>
    <p><strong>Stay Aware:</strong> Be mindful of your surroundings, especially at night, and watch your drinks.</p>
  </li>

  <li>
    <p><strong>Limit Alcohol:</strong> Drink responsibly and never leave beverages unattended.</p>
  </li>

  <li>
    <p><strong>Trust Your Gut:</strong> Leave situations that feel uncomfortable or unsafe.</p>
  </li>
</ul>

<hr>

<p>
During Your Trip:
</p>

<ul>
  <li>
    <p><strong>Embrace Solitude:</strong> Enjoy activities like visiting museums or relaxing in cafés on your own.</p>
  </li>

  <li>
    <p><strong>Connect:</strong> Talk to locals and fellow travelers, or join walking tours and classes.</p>
  </li>

  <li>
    <p><strong>Limit Social Media:</strong> Focus on experiences rather than constant posting.</p>
  </li>

  <li>
    <p><strong>Have a Go-To List:</strong> Keep backup ideas for boredom or loneliness while leaving room for spontaneous plans.</p>
  </li>
</ul>


`
    },
    {
      id: 8,
      title: "Hidden Cafés in Paris",
      excerpt: "Discover cozy cafés tucked away from the tourist crowds.",
      image: "/images/post8.jpg",
      date: "Dec 20, 2020",
      content: `
   

      <p>
Paris’s hidden cafés offer cozy escapes from the city’s bustle, ranging from tiny, character-filled coffee spots to peaceful museum gardens and creative, themed cafés. These lesser-known places provide intimate atmospheres, quality coffee, and unique experiences beyond traditional Parisian café culture.
</p>

<hr>

<p>
Tiny & Cozy Gems:
</p>

<ul>
  <li>
    <p><strong>Boot Café (Le Marais):</strong> A former cobbler’s shop turned tiny café, loved for its vintage charm, strong coffee, and homemade granola. Small, intimate, and highly Instagrammable.</p>
  </li>

  <li>
    <p><strong>Fragments (Le Marais):</strong> A favorite among coffee purists, known for high-quality hand-poured coffee in a rustic, relaxed setting. Seating is limited, so arriving early is best.</p>
  </li>

  <li>
    <p><strong>Café JIRISAN (Near the Seine):</strong> Renowned for excellent coffee, a warm atmosphere, and standout cheesecakes, making it a cozy stop near the river.</p>
  </li>
</ul>

<hr>

<p>
Museum & Garden Retreats:
</p>

<ul>
  <li>
    <p><strong>Petit Palais Garden Café:</strong> A tranquil courtyard café surrounded by palm trees and mosaics, offering a quiet oasis near the Champs-Élysées and accessible even without museum entry.</p>
  </li>
</ul>

<hr>

<p>
Unique Concepts:
</p>

<ul>
  <li>
    <p><strong>Le Chat-Rivari Café (13th Arr.):</strong> A cozy vegan café where visitors can relax with adoptable cats, blending coffee culture with animal welfare.</p>
  </li>

  <li>
    <p><strong>Créa’Café (Opposite Père-Lachaise):</strong> A creative café combining coffee with painting and art workshops in an inspiring environment.</p>
  </li>

  <li>
    <p><strong>Hoso Basque (Marais):</strong> A lively café known for Japanese-style cheesecakes and a trendy, modern atmosphere.</p>
  </li>
</ul>

<hr>

<p>
Historic & Atmospheric:
</p>

<ul>
  <li>
    <p><strong>Cour du Commerce Saint-André (Latin Quarter):</strong> A historic cobblestone passage home to Le Procope, Paris’s oldest café, rich with revolutionary-era history and timeless ambiance.</p>
  </li>
</ul>

<hr>

<p>
Tips for Finding Hidden Cafés:
</p>

<ul>
  <li>
    <p>Explore smaller streets and quiet alleys in neighborhoods like Le Marais or Montparnasse.</p>
  </li>

  <li>
    <p>Look inside museums, courtyards, and covered passages for unexpected calm.</p>
  </li>

  <li>
    <p>Seek cafés with specific themes such as art, cats, or crafts for truly unique experiences.</p>
  </li>
</ul>
`
    },
    {
      id: 9,
      title: "Mountain Escapes for Peace Seekers",
      excerpt: "Find calm and clarity in breathtaking mountain destinations.",
      image: "/images/post9.jpg",
      date: "Dec 25, 2020",
      content: `
   <p>
A mountain escape offers peace for seekers by providing a serene, natural retreat from daily stress. Crisp air, quiet surroundings filled with gentle natural sounds, and a slower pace foster mental clarity, reflection, and spiritual recharge, making it both a literal and metaphorical break for inner calm and personal growth.
</p>

<hr>

<p>
Key Aspects of a Peaceful Mountain Escape:
</p>

<ul>
  <li>
    <p><strong>Sensory Calm:</strong> The quiet is not empty but filled with birdsong and wind, reducing mental noise and encouraging slower, deeper breathing.</p>
  </li>

  <li>
    <p><strong>Recharge & Rejuvenation:</strong> Time away from routine helps restore emotional balance and renew energy.</p>
  </li>

  <li>
    <p><strong>Mental Clarity:</strong> A serene environment supports clearer thinking, mindfulness, and introspection.</p>
  </li>

  <li>
    <p><strong>Spiritual Connection:</strong> Mountains often symbolize sacredness, inspiring self-discovery and a deeper bond with nature.</p>
  </li>

  <li>
    <p><strong>Activities:</strong> Gentle hikes, exploration of local charm, and quiet moments enjoying sunrises or waterfalls offer meaningful yet unhurried engagement.</p>
  </li>

  <li>
    <p><strong>Slower Pace:</strong> Life moves more slowly in the mountains, allowing space to decompress and appreciate simple moments.</p>
  </li>
</ul>

<hr>

<p>
Why It Works:
</p>

<ul>
  <li>
    <p><strong>Escape from Stress:</strong> A physical or symbolic retreat away from daily pressures, like stepping into a personal sanctuary.</p>
  </li>

  <li>
    <p><strong>Feeling Alive:</strong> Vast landscapes inspire awe, making one feel more connected to life and the present moment.</p>
  </li>

  <li>
    <p><strong>Growth & Reflection:</strong> Time and space to reflect, gently challenge oneself, and foster personal growth.</p>
  </li>
</ul>


`
    },

  ];
  
  // IMPORTANT: next id must continue
   let postId = 11;

