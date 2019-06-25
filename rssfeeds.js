var menu = [
	{ cmd : "abc", title : "ABC is an American commercial broadcast television network that is a flagship property of Walt Disney Television", feed : "https://abcnews.go.com/abcnews/internationalheadlines", homepage : "https://www.abc.com" },
	{ cmd : "arch", title : "Arch Linux is a Linux distribution for computers based on x86-64 architectures.", feed : "https://bbs.archlinux.org/extern.php?type=rss", homepage : "http://bbs.archlinux.org" },
	{ cmd : "archlinux", title : "ArchLinux subreddit discusses topics revolving around Arch Linux.", feed : "https://www.reddit.com/r/archlinux/.rss", homepage : "https://www.reddit.com/r/archlinux" },
	{ cmd : "ars", title : "Ars Technica has became a trusted source for technology news.", feed : "http://feeds.arstechnica.com/arstechnica/index?format=xml", homepage : "https://arstechnica.com" },
	{ cmd : "bbc", title : "The BBC is the world’s leading public service broadcaster.", feed : "http://feeds.bbci.co.uk/news/technology/rss.xml", homepage : "https://www.bbc.co.uk/news/technology" },
	{ cmd : "beta", title : "BetaNews is a leading source of technology news and analysis.", feed : "http://feeds.betanews.com/bn", homepage : "https://betanews.com" },
	{ cmd : "cbs", title : "CBS is a mass media company that creates and distributes industry-leading content.", feed : "https://www.cbsnews.com/latest/rss/world", homepage : "https://www.cbsnews.com" },
	{ cmd : "cnbc", title : "CNBC is an American pay television business news channel that is owned by NBCUniversal.", feed : "https://www.cnbc.com/id/19854910/device/rss/rss.html", homepage : "https://www.cnbc.com/technology" },
	{ cmd : "cnn", title : "CNN.com is among the world's leaders in online news and information delivery.", feed : "http://rss.cnn.com/rss/cnn_topstories.rss", homepage : "https://www.cnn.com" },
	{ cmd : "comingsoon", title : "New Movies, Movie Trailers, TV, Digital, Blu-ray & Video Game News!", feed : "https://www.comingsoon.net/feed", homepage : "https://www.comingsoon.net" },
	{ cmd : "dailymail", title : "The Daily Mail is a British daily middle-market newspaper published in London.", feed : "https://www.dailymail.co.uk/articles.rss", homepage : "https://www.dailymail.co.uk" },
	{ cmd : "engadget", title : "Engadget is a multilingual technology blog network with daily coverage of gadgets and consumer electronics.", feed : "https://www.engadget.com/rss.xml", homepage : "https://www.engadget.com" },
	{ cmd : "espn", title : "ESPN is a cable network that plays live and taped sporting events.", feed : "https://www.espn.com/espn/rss/news", homepage : "https://www.espn.com" },
	{ cmd : "gizmodo", title : "Gizmodo is a design, technology, science and science fiction website.", feed : "https://gizmodo.com/rss", homepage : "https://gizmodo.com" },
	{ cmd : "google", title : "Google LLC is an American multinational technology company that specializes in Internet-related services and products.", feed : "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en", homepage : "https://news.google.com" },
	{ cmd : "gtech", title : "G is a 4Chan board that discusses technology.", feed : "http://boards.4chan.org/g/index.rss", homepage : "http://boards.4channel.org/g/" },
	{ cmd : "guardian", title : "The Guardian is the world's leading liberal voice.", feed : "https://www.theguardian.com/world/rss", homepage : "https://www.theguardian.com" },
	{ cmd : "hacker", title : "Hacker News is a reader run headline submission news purveyor.", feed : "https://news.ycombinator.com/rss", homepage : "https://news.ycombinator.com" },
	{ cmd : "huffington", title : "HuffingtonPost is an American liberal Web site that offers news and commentary.", feed : "https://www.huffpost.com/section/technology/feed", homepage : "https://www.huffpost.com/section/technology" },
	{ cmd : "infoworld", title : "InfoWorld is an information technology media business.", feed : "https://www.infoworld.com/index.rss", homepage : "https://www.infoworld.com" }, 
	{ cmd : "insider", title : "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals.", feed : "https://www.businessinsider.com/rss", homepage : "https://www.businessinsider.com" },
	{ cmd : "kotaku", title : "Kotaku is a news and opinion site about games and things serious gamers care about.", feed : "https://kotaku.com/rss", homepage : "https://kotaku.com" },
	{ cmd : "latimes", title : "The Los Angeles Times is a daily newspaper which has been published in Los Angeles, California, since 1881.", feed : "https://www.latimes.com/business/technology/rss2.0.xml", homepage : "https://www.latimes.com/business/technology" },
	{ cmd : "mashable", title : "Mashable is the go-to source for tech, digital culture and entertainment content.", feed : "http://feeds.mashable.com/Mashable", homepage : "https://mashable.com" },
	{ cmd : "mechanics", title : "Popular Mechanics is a magazine of popular science and technology.", feed : "https://www.popularmechanics.com/rss/all.xml", homepage : "https://www.popularmechanics.com" },
	{ cmd : "mirror", title : "All the latest news, sport and celebrity gossip at Mirror.co.uk.", feed : "https://www.mirror.co.uk/tech/?service=rss", homepage : "https://www.mirror.co.uk/tech" },
	{ cmd : "mit", title : "MIT is a top university, in science and engineering, political science, cognitive science, philosophy and linguistics.", feed : "http://news.mit.edu/rss/feed", homepage : "http://news.mit.edu" },
	{ cmd : "mlb", title : "MLB.com, is the official site of Major League Baseball.", feed : "https://www.mlb.com/feeds/news/rss.xml", homepage : "https://www.mlb.com" },
	{ cmd : "mma", title : "MMAjunkie Radio is a weekly Internet radio show broadcast from Las Vegas, Nevada.", feed : "https://mmajunkie.com/news/feed", homepage : "https://mmajunkie.com" },
	{ cmd : "msn", title : "MSN is a web portal and related collection of Internet services and apps for Windows and mobile devices.", feed : "http://rss.msn.com", homepage : "https://www.msn.com" },
	{ cmd : "nbc", title : "NBC News is the news division of the American broadcast television network NBC.", feed : "http://feeds.nbcnews.com/nbcnews/public/news", homepage : "https://www.nbcnews.com" },
	{ cmd : "npr", title : "NPR is an independent, nonprofit media organization that was founded on a mission to create a more informed public.", feed : "https://www.npr.org/rss/rss.php?id=1019", homepage : "https://www.npr.org" },
	{ cmd : "packet", title : "Packet Storm Security is a popular information security website offering current and historical computer security tools.", feed : "https://rss.packetstormsecurity.com/news/tags/usa", homepage : "https://packetstormsecurity.com" },
	{ cmd : "pbs", title : "The Public Broadcasting Service is an American public broadcaster and television program distributor.", feed : "https://www.pbs.org/newshour/feeds/rss/headlines", homepage : "https://www.pbs.org" },
	{ cmd : "pcworld", title : "PC World is one of the United Kingdom's largest retail chains of mass market computer megastores.", feed : "https://www.pcworld.com/index.rss", homepage : "https://www.pcworld.com" },
	{ cmd : "people", title : "People is an American weekly magazine of celebrity and human-interest stories.", feed : "https://people.com/tag/news/feed", homepage : "https://people.com" },
	{ cmd : "politico", title : "POLITICO strives to be the dominant source for politics and policy.", feed : "https://www.politico.com/rss/morningtech.xml", homepage : "https://www.politico.com" },
	{ cmd : "radar", title : "TechRadar is an online publication focused on technology", feed : "https://www.techradar.com/rss", homepage : "https://www.techradar.com" },
	{ cmd : "reuters", title : "Reuters is an international news organization.", feed : "http://feeds.reuters.com/reuters/technologyNews", homepage: "https://www.reuters.com/news/technology" },
	//{ cmd : "rotten", title : "Rotten Tomatoes is an American review-aggregation website for film and television.", feed : "http://editorial.rottentomatoes.com/feed", homepage : "https://www.rottentomatoes.com" },
	{ cmd : "sky", title : "Sky News is a British news organisation, which operates a TV network.", feed : "http://feeds.skynews.com/feeds/rss/technology.xml", homepage : "https://news.sky.com/technology" },
	{ cmd : "slashdot", title : "Slashdot is a social news website that originally billed itself as News for Nerds.", feed : "http://rss.slashdot.org/Slashdot/slashdot", homepage : "https://slashdot.org" },
	{ cmd : "ssn", title : "The Smithsonian Institution is the world’s largest museum, education, and research complex.", feed : "https://www.smithsonianmag.com/rss/articles", homepage : "https://www.smithsonianmag.com" },
	{ cmd : "sports", title : "Sports Illustrated is a weekly sports magazine that originated in 1954.", feed : "https://www.si.com/rss/si_topstories.rss", homepage : "https://www.si.com" },
	{ cmd : "steam", title : "Steam is a video game digital distribution platform developed by Valve Corporation.", feed : "https://store.steampowered.com/feeds/news.xml", homepage : "https://steamcommunity.com" },
	{ cmd : "techcrunch", title : "TechCrunch reports on the business of technology, startups, venture capital funding, and Silicon Valley.", feed : "http://feeds.feedburner.com/TechCrunch", homepage : "https://techcrunch.com" },
	{ cmd : "techmeme", title : "TechMeme is an automated news curation service focused on the leading edge of technology.", feed : "https://www.techmeme.com/feed.xml", homepage : "https://www.techmeme.com" },
	{ cmd : "techspot", title : "TechSpot is a leading computer and technology publication established in 1998.", feed : "https://www.techspot.com/backend.xml", homepage : "https://www.techspot.com" },
	{ cmd : "time", title : "TIME Magazine is one of the most authoritative and informative guides to what is happening in the world.", feed : "http://feeds.feedburner.com/time/topstories?format=xml", homepage : "https://time.com" },
	{ cmd : "tmz", title : "TMZ is a tabloid news website that was a collaboration between AOL and Telepictures Productions.", feed : "https://www.tmz.com/rss.xml", homepage : "https://www.tmz.com" },
	{ cmd : "ufc", title : "UFC is an American mixed martial arts promotion company based in Las Vegas, Nevada.", feed : "https://www.ufc.com/rss/news", homepage : "https://www.ufc.com" },
	{ cmd : "usa", title : "USA Today is an internationally distributed American daily, middle-market newspaper.", feed : "http://rssfeeds.usatoday.com/usatoday-techtopstories&x=1", homepage : "https://www.usatoday.com/tech/" },
	{ cmd : "verge", title : "The Verge is an ambitious multimedia effort founded in 2011.", feed : "https://www.theverge.com/rss/index.xml", homepage : "https://www.theverge.com" },
	{ cmd : "vice", title : "Vice Original reporting and documentaries on everything that matters in the world.", feed : "https://www.vice.com/en_us/rss", homepage : "https://www.vice.com" },
	{ cmd : "wpg", title : "WallPapers General is a 4Chan board that shares mobile and computer wallpapers.", feed : "http://boards.4chan.org/wg/index.rss", homepage : "http://boards.4chan.org/wg" },
	{ cmd : "wired", title : "WIRED is where tomorrow is realized. It is the essential source of information.", feed : "https://www.wired.com/feed/rss", homepage : "https://www.wired.com" },
	{ cmd : "yahoo", title : "Yahoo is an American web services provider headquartered in Sunnyvale, California, and owned by Verizon Media.", feed : "https://www.yahoo.com/tech/rss", homepage : "https://finance.yahoo.com/tech" },
	{ cmd : "ycv", title : "YourCentralValley.com is the news site for KSEE24 and CBS47 in Fresno, California.", feed : "https://www.yourcentralvalley.com/feed", homepage : "https://www.yourcentralvalley.com" }
]
