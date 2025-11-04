 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AT",  //two characters upper case - these also appear in corresponding cards
    "name": "Alignment Traits", 
    "pathology": " ", 
    "color": "#E6FFE9", //include for later use color coding categories
    "description": "Alignment traits I would want robot to have."
  }
];


 export const cards = [

  {
    "category": "AP",
    "name": "Hoped for Excellent teaching and mentorship, Rewarded publications, grants, and prestige",
    "definition": "Hoped for  Excellent teaching and mentorship Rewarded: publications, grants, and prestige. Alignment Failure: A system that rewards publications and grants can lead to professors focusing on quantity over quality, and prioritizing their own career advancement over the education and mentorship of students. Reverse Example: Rewarding excellent teaching and mentorship. Reverse Definition: A system that tracks and rewards the quality of teaching and mentorship provided by researchers, rather than just their publications and grants.",
    "human": "Professor rushes through lectures to spend more time researching and writing papers.",
    "organizational": "A university allocates promotions and funding based solely on research output, causing teaching quality and student engagement to decline.",
    "professional": "An academic department values reputation and publications over its duty to educate, producing graduates with weak practical understanding.",
    "machine": "A AI driven faculuty evaluation system optimizes for publication metrics, inadvertently discouraging time spent mentoring or improving instruction.",
    "failureModes": {
      "human": "Professors experience burnout or disengagement as they chase publication quotas rather than connecting with students.",
      "organizational": "Universities see rising prestige but falling student satisfaction and learning outcomes.",
      "professional": "Scholars gain status in their field while producing graduates unprepared for real-world application or civic responsibility.",
      "machine": "Automated performance systems amplify the bias toward quantifiable outputs, giving less importance and reward to human-centered teaching and mentoring."
    }
    },
    { 
      "category": "AP", 
      "name": "Hoped for elected officials that make difficult decisions for the greater good, Rewarded: popularity and short-term ", 
      "definition": "Hoped for courageous long term public service. Rewarded: popularity and short-term wins. Alignment Failure: A system that rewards popularity and short-term wins can lead to elected officials prioritizing their own re-election over the long-term well-being of their constituents. Reverse Example: Rewarding courageous long term public service. Reverse Definition: A system that tracks and rewards elected officials for making difficult decisions that benefit the greater good, even if they are unpopular in the short term.", 
      "human": "BRIEFLY: how does it manifest in the human intelligence alignment context?", 
      "organizational": "BRIEFLY: how does it manifest in the organizational intelligence alignment context?", 
      "professional": "BRIEFLY: how does it manifest in the expert intelligence alignment context?", 
      "machine": "BRIEFLY: how does it manifest in the machine intelligence alignment context?", 
      "failureModes": { 
        "human": "Leaders become risk-averse and prioritize self-preservation over public interest.",
        "organizational": "Parties become image-driven, focusing on winning elections rather than governing effectively.",
        "professional": "Experts and advisors bend evidence to match what is politically expedient, eroding trust in institutions.",
        "machine": "Automated media and campaign tools spread sensational or divisive content because it maximizes clicks and voter mobilization metrics."
      }
    },
	 {
      "category": "AP", 
      "name": "Hoped for Teamwork, Rewarded Individual Performance", 
      "definition": "Hoped for: Teamwork and players putting the team before their own needs and wants Rewarded: Individual performances and stats.  Alignment Failure: A team that rewards individual successes can cause a hero culture and team members can learn through the reward system that individuals efforts and successes are more important than the team's.  Reverse Example: Reward behind the scenes effort and less individual performance. Reverse Definition: A system that tracks and rewards everyone's contributions to the team, not just the star players. For example, assists, leadership, communications, hustle plays, and mentorship.", 
      "human": "A player who is the best scorer on the team but never passes to open teammates and hogs the ball, causing resentment and poor team dynamics.",
      "organizational": "Athletes are expected to play as a team, but are rewarded for individual performance. This is seen not only in salaries and bonuses, but also in awards like MVP.", 
      "professional": "Coaches give playing time to those who score, regardless of if they are not playing as a team or being selfish.", 
      "machine": "Machines can be designed to optimize for individual performance metrics, such as speed or accuracy, without considering the overall system's effectiveness or collaboration with other systems.", 
      "failureModes": { 
        "human": "Damange to team chemistry and dynamics, leading to losses despite having talented individuals. Also, resentment and lack of trust among teammates.", 
        "organizational": "Scandals in professional sports where players prioritize personal achievements over team success, leading to conflicts and underperformance.", 
        "professional": "Coaching decisions based on individual stats result in predictable strategies, weak defensive coordination, and lack of team-first culture.",
        "machine": "Feature selection bias, machines or AI could be selecting based off quantifiable metrics that don't capture the full picture of what is needed for success."
      }
    },
    {
      "category": "AT",
      "name": "considerateness",
      "definition": "ability to be thoughful and kind towards others, taking their feelings and needs into account",
      "people": "expressing emptahy, respect, and understanding in interactions with others",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "being mindful of the impact of one's actions on colleagues, clients, and stakeholders",
      "organizationalref": "OPTIONAL",
      "professionals": "balancing assertiveness with sensitivity to others' perspectives and needs",
      "professionalref": "OPTIONAL",
      "machine": "designing systems that prioritize user well-being and positive experiences and offer user-sensitive solutions",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "self-centered and inconsiderate behavior that disregards others' feelings and needs",
        "organizational": "policies and practices that prioritizes profit over employee well-being and customer satisfaction",
        "experts": "communication styles that are overly blunt or dismissive of others' perspectives",
        "machine": "systems that prioritize efficiency over user experience, leading to frustration and dissatisfaction, such as over notifying"
      },
         "expand": {
        "human": "Someone sees a colleague struggling with a heavy workload and offers to help them out or take on some of their tasks.",
        "organizational": "A company implements flexible work hours and mental health days to support employees' well-being.",
        "experts": "A manager provides constructive feedback to an employee while also acknowledging their strengths and contributions.",
        "machine": "A virtual assistant that recognizes when a user is frustrated and offers empathetic responses and helpful suggestions."
      }
    },
    {
      "category": "AT",
      "name": "shared intentionality",
      "definition": "the ability to share goals, intentions, and plans with others in a collaborative manner",
      "people": "working together towards common objectives through effective communication and coordination",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "aligning team and organizational goals to foster collaboration and collective success",
      "organizationalref": "OPTIONAL",
      "professionals": "facilitating teamwork and cooperation among colleagues and stakeholders",
      "professionalref": "OPTIONAL",
      "machine": "developing AI systems that can understand and align with human goals and intentions in collaborative tasks",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      },
         "expand": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      }
    },
    {
      "category": "AT",
      "name": "trustworthiness",
      "definition": "loremipsum",
      "people": "loremipsum",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "loremipsum",
      "organizationalref": "OPTIONAL",
      "professionals": "loremipsum",
      "professionalref": "OPTIONAL",
      "machine": "loremipsum",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      },
         "expand": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      }
    },
    {
      "category": "AT",
      "name": "epistemic humility",
      "definition": "loremipsum",
      "people": "loremipsum",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "loremipsum",
      "organizationalref": "OPTIONAL",
      "professionals": "loremipsum",
      "professionalref": "OPTIONAL",
      "machine": "loremipsum",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      },
         "expand": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      }
    },
    {
      "category": "AT",
      "name": "role fidelity",
      "definition": "loremipsum",
      "people": "loremipsum",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "loremipsum",
      "organizationalref": "OPTIONAL",
      "professionals": "loremipsum",
      "professionalref": "OPTIONAL",
      "machine": "loremipsum",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      },
         "expand": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      }
    },
    {
      "category": "AT",
      "name": "reliability/consistency",
      "definition": "loremipsum",
      "people": "loremipsum",
      "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
      "organizational": "loremipsum",
      "organizationalref": "OPTIONAL",
      "professionals": "loremipsum",
      "professionalref": "OPTIONAL",
      "machine": "loremipsum",
      "machineref": "OPTIONAL",
      "failureModes": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      },
         "expand": {
        "human": "loremipsum",
        "organizational": "loremipsum",
        "experts": "loremipsum",
        "machine": "loremipsum"
      }
    }
    ]
