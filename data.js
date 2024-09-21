// Array containing all exercises available on the site
let exercises = [
  // Each object represents an exercise with details like names, execution, muscle groups, etc.
  {
    namePortuguese: "Ponte de Glúteos",
    nameEnglish: "Glute Bridge",
    executionMode: "Lie on your back on a mat with your knees bent and feet flat on the floor, hip-width apart. Keep your arms extended at your sides with palms facing down. Squeeze your glutes and abs as you lift your hips towards the ceiling, forming a straight line from your shoulders to your knees. Hold the position at the top for a second, then slowly lower your hips until they almost touch the floor. Avoid arching your lower back during the movement and focus on engaging the glutes.",
    muscleGroups: "Works glutes, hamstrings",
    variations: "Single-leg glute bridge, barbell glute bridge",
    link: "https://www.youtube.com/watch?v=F6X8rGPkSKQ"
  },
  {
    namePortuguese: "Abdominal Remador",
    nameEnglish: "V-up",
    executionMode: "Lie on your back on a mat, extending your arms above your head and keeping your legs straight. Contract your abs and simultaneously raise your upper body and legs, reaching to touch your toes with your hands at the peak of the movement. Keep your legs straight and arms extended throughout. At the top, your body should form a 'V'. Control the descent back to the starting position slowly, without letting your feet touch the ground between reps to maintain tension in the abs.",
    muscleGroups: "Works abs",
    variations: "Toe touches, jackknife sit-ups",
    link: "https://www.youtube.com/watch?v=xvS-hw6dEGI"
  },
  {
    namePortuguese: "Puxada com Corda",
    nameEnglish: "Cable Rope Pulldown",
    executionMode: "Stand facing the pulley machine with a rope attached to the high pulley. Hold the ends of the rope with palms facing each other. Keep your feet shoulder-width apart and knees slightly bent. Pull the rope towards your body, separating the ends as you lower, keeping your elbows fixed at your sides. Focus on contracting the triceps at the end of the movement. Return to the starting position in a controlled manner, allowing the rope to rise slowly.",
    muscleGroups: "Works triceps",
    variations: "Overhead rope extension, face pull",
    link: "https://www.youtube.com/watch?v=fTHAYNVdBfE"
  },
  {
    namePortuguese: "Supino Inclinado",
    nameEnglish: "Incline Bench Press",
    executionMode: "Adjust the bench to an angle of about 30 to 45 degrees for the incline press. Lie on the bench with your feet firmly on the ground. Grip the barbell with your hands slightly wider than shoulder-width apart. Slowly lower the bar to your upper chest, keeping your elbows at a 45-degree angle to your torso. Press the bar up, fully extending your arms and contracting your upper chest. Keep your abs tight and spine aligned throughout the movement.",
    muscleGroups: "Works upper chest, triceps",
    variations: "Incline dumbbell press, incline machine press",
    link: "https://www.youtube.com/watch?v=-iRqhXSx15M"
  },
  {
    namePortuguese: "Flexão de Braço",
    nameEnglish: "Push-up",
    executionMode: "Start in a high plank position with your hands directly under your shoulders and feet together. Keep your body aligned from heels to head. Bend your elbows to lower your body until your chest is just above the ground, keeping your elbows close to your body. Push through your palms to extend your arms and return to the starting position. Engage your abs and glutes to avoid your hips sagging or lifting.",
    muscleGroups: "Works chest, triceps, deltoids",
    variations: "Diamond push-up, wide push-up",
    link: "https://www.youtube.com/watch?v=dHgoYiCraCw"
  },
  {
    namePortuguese: "Rosca Martelo",
    nameEnglish: "Hammer Curl",
    executionMode: "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with palms facing your body. Keeping your elbows close to your torso, curl the dumbbells up towards your shoulders without rotating your wrists. Lower the dumbbells in a controlled manner to the starting position. Avoid swinging your body and maintain tension in your biceps and forearms.",
    muscleGroups: "Works biceps, forearms",
    variations: "Cable hammer curl, rope hammer curl",
    link: "https://www.youtube.com/watch?v=0qkQy8V2FC0"
  },
  {
    namePortuguese: "Crucifixo Inverso",
    nameEnglish: "Reverse Fly",
    executionMode: "Hold a dumbbell in each hand and lean forward at the hips, keeping your back straight and knees slightly bent. With your arms extended and palms facing each other, raise your arms laterally until the dumbbells reach shoulder height. Squeeze your shoulder blades and rear deltoids at the top. Lower the dumbbells slowly back to the starting position. Avoid swinging your body or using momentum.",
    muscleGroups: "Works rear deltoids, trapezius",
    variations: "Cable reverse fly, machine reverse fly",
    link: "https://www.youtube.com/watch?v=G3DXKpk5AJA"
  },
  {
    namePortuguese: "Rosca Concentrada",
    nameEnglish: "Concentration Curl",
    executionMode: "Sit on a bench with your legs spread and rest the elbow of one arm on the inside of your thigh. Hold a dumbbell with your palm facing up. Curl the dumbbell towards your shoulder, keeping your elbow fixed against your thigh. Squeeze the bicep at the top of the movement and then lower the dumbbell slowly until your arm is fully extended.",
    muscleGroups: "Works biceps",
    variations: "Seated concentration curl, dumbbell concentration curl",
    link: "https://www.youtube.com/watch?v=EEpvOQAAtRo"
  },
  {
    namePortuguese: "Burpee",
    nameEnglish: "Burpee",
    executionMode: "Start standing with your feet shoulder-width apart. Squat down and place your hands on the ground in front of your feet. Then jump your feet back into a push-up position. Perform a push-up, lowering your chest to the floor. After completing the push-up, jump your feet back to the squat position and immediately jump up, extending your arms overhead. Upon landing, return to the squat position and repeat.",
    muscleGroups: "Works full body",
    variations: "Box burpee, burpee with push-up",
    link: "https://www.youtube.com/watch?v=auBLPXO8Fww"
  },
  {
    namePortuguese: "Elevação de Ombros",
    nameEnglish: "Shrug",
    executionMode: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides with arms extended. Relax your shoulders and keep your knees slightly bent. Lift your shoulders towards your ears, contracting your trapezius at the top. Hold the contraction for a second, then lower your shoulders slowly.",
    muscleGroups: "Works trapezius",
    variations: "Barbell shrug, cable shrug",
    link: "https://www.youtube.com/watch?v=adpq8QDygDQ"
  },
  {
    namePortuguese: "Escaladores",
    nameEnglish: "Mountain Climbers",
    executionMode: "Start in a push-up position with your hands on the floor and feet together. Alternately bring one knee at a time towards your chest, as if you're climbing a mountain. Keep your core tight and body aligned. Increase speed to intensify the workout. Focus on keeping your hips low and abs engaged.",
    muscleGroups: "Works abs, core",
    variations: "Cross-body mountain climbers, slow mountain climbers",
    link: "https://www.youtube.com/watch?v=Eni-G2H-WUA"
  },
  {
    namePortuguese: "Subida no banco",
    nameEnglish: "Step-up",
    executionMode: "Stand in front of a sturdy bench or step. Step up with one foot, pressing your heel into the bench, while keeping your torso upright. Bring the other foot up to the bench, then slowly step down, always starting with the same leg. Alternate legs after a set. Keep the movement controlled and focus on using your legs rather than momentum.",
    muscleGroups: "Works quadriceps, glutes",
    variations: "Dumbbell step-up, alternating step-up",
    link: "https://www.youtube.com/watch?v=dqCCHa9XEZc"
  },
  {
    namePortuguese: "Ponte/prancha Lateral",
    nameEnglish: "Side Plank",
    executionMode: "Lie on your side on the floor and support yourself on your forearm, aligning it directly under your shoulder. Keep your legs extended and feet stacked on top of each other. Lift your hip to form a straight line from shoulder to feet, contracting your abs. Hold this position for a few seconds, keeping your body firm. For more intensity, you can lift the top leg or add hip raises. Repeat on the other side to work both sides of the core.",
    muscleGroups: "Works core, oblique abs",
    variations: "Side plank with leg lift, side plank with hip dips",
    link: "https://www.youtube.com/watch?v=hccIOreXgCo"
  },
  {
    namePortuguese: "Elevação/Empurrada de Quadril",
    nameEnglish: "Hip Thrust",
    executionMode: "Sit on the ground with your back against a bench and position a barbell over your hips. Keep your feet firmly on the floor, hip-width apart. Push your hips up, contracting your glutes, until your body forms a straight line from shoulders to knees. Hold for a second at the top and slowly lower back down, keeping tension in the glutes. Avoid hyperextending your lower back and keep your abs tight throughout the movement.",
    muscleGroups: "Works glutes, hamstrings",
    variations: "Single-leg hip thrust, hip thrust with resistance band",
    link: "https://www.youtube.com/watch?v=HkE86qAJzZU"
  },
  {
    namePortuguese: "Abdominal com Rotação",
    nameEnglish: "Russian Twist",
    executionMode: "Sit on the ground with your knees bent and feet slightly elevated. Hold a weight with both hands or just clasp your hands in front of your body. Keeping your abs tight, twist your torso from side to side, touching the ground with the weight or your hands on each side. Keep your feet off the ground to increase difficulty and balance. Control your breathing and movement to maximize contraction of the oblique abdominal muscles.",
    muscleGroups: "Works core, oblique abs",
    variations: "Russian twist with weight, Russian twist on pulley",
    link: "https://www.youtube.com/watch?v=Y9ApG7MWIuA"
  },
  {
    namePortuguese: "Kettlebell Swing",
    nameEnglish: "Kettlebell Swing",
    executionMode: "Stand with your feet shoulder-width apart and hold the kettlebell with both hands in front of your body. Slightly bend your knees and push your hips back, swinging the kettlebell between your legs. Using the power of your hips and glutes, thrust the kettlebell forward and up to shoulder height. At the top of the swing, squeeze your glutes and keep your abs tight. Let the kettlebell descend in a controlled manner and repeat the movement fluidly.",
    muscleGroups: "Works glutes, hamstrings",
    variations: "Single-arm kettlebell swing, alternating kettlebell swing",
    link: "https://www.youtube.com/watch?v=MB87gQFA_y0"
  },
  {
    namePortuguese: "Pulley Frente ao Rosto",
    nameEnglish: "Face Pull",
    executionMode: "Stand facing the pulley with a rope attached to the pulley at medium height. Hold the ends of the rope with your palms facing each other. Pull the rope towards your face, keeping your elbows high and wide. Focus on contracting the muscles of your scapula and rear deltoids. Return to the starting position in a controlled manner, avoiding letting the weight drop quickly. Keep your abs tight during the movement to protect your spine and stabilize your body.",
    muscleGroups: "Works rear deltoids, trapezius",
    variations: "Single-arm face pull, face pull with resistance band",
    link: "https://www.youtube.com/watch?v=5YpVRG94q9c"
  },
  {
    namePortuguese: "Tríceps Testa",
    nameEnglish: "Skull Crusher",
    executionMode: "Lie on a bench with your feet on the ground and hold an EZ bar with palms facing up, above your head. Keep your elbows aligned and lower the bar towards your forehead, flexing only your elbows. Stop before touching your forehead and then extend your elbows to return to the starting position. Keep your arms stable throughout the movement, focusing on working the triceps. Avoid flaring your elbows and control the descent to protect your joints.",
    muscleGroups: "Works triceps",
    variations: "Dumbbell skull crusher, cable skull crusher",
    link: "https://www.youtube.com/watch?v=0M-1walYH4Y"
  },
  {
    namePortuguese: "Caminhada do Fazendeiro",
    nameEnglish: "Farmer's Walk",
    executionMode: "Stand with your feet shoulder-width apart and hold a dumbbell or kettlebell in each hand at your sides. Keep your torso upright and shoulders pulled back. Start walking slowly in a straight line, keeping your abs tight to stabilize your body. Take controlled steps and continue walking until you can't hold the weight any longer. Place the dumbbells on the floor carefully and rest before repeating the exercise.",
    muscleGroups: "Works trapezius, abs",
    variations: "Heavy farmer's walk, single-arm farmer's walk",
    link: "https://www.youtube.com/watch?v=CeUKHZFNYHs"
  },
  {
    namePortuguese: "Flexão Diamante",
    nameEnglish: "Diamond Push-up",
    executionMode: "Start in a plank position with your hands together under your chest, forming a diamond shape with your index fingers and thumbs. Lower your body by bending your elbows, keeping them close to your body, until your chest is just above the ground. Push through your palms to return to the starting position.",
    muscleGroups: "Works chest, triceps, and shoulders",
    variations: "Knee diamond push-up, incline diamond push-up",
    link: "https://www.youtube.com/watch?v=J0DnG1_S92I"
  },
  {
    namePortuguese: "Remada Unilateral",
    nameEnglish: "One-arm Dumbbell Row",
    executionMode: "Place your left knee and hand on a bench, keeping your back flat. Hold a dumbbell in your right hand with your arm fully extended. Pull the dumbbell towards your waist, squeezing your back muscles at the top. Lower the dumbbell back to the starting position in a controlled manner. Repeat on the other side.",
    muscleGroups: "Works back, biceps, and shoulders",
    variations: "Standing one-arm row, T-bar row with one arm",
    link: "https://www.youtube.com/watch?v=dFzUjzfih7k"
  },
  {
    namePortuguese: "Prancha com Flexão de Braço",
    nameEnglish: "Push-up to Plank",
    executionMode: "Start in a high plank position with your hands under your shoulders. Lower your body to the ground in a push-up, then push back up to the plank position. Next, lower one forearm to the ground, followed by the other, transitioning into a low plank. Return to the high plank position one arm at a time.",
    muscleGroups: "Works chest, triceps, shoulders, and core",
    variations: "Push-up to side plank, knee push-up to plank",
    link: "https://www.youtube.com/watch?v=2kEnT-CdXyE"
  },
  {
    namePortuguese: "Elevação Frontal",
    nameEnglish: "Front Raise",
    executionMode: "Hold a dumbbell in each hand with your arms fully extended at your sides. Raise your arms forward until they are parallel to the ground, keeping a slight bend in your elbows. Lower the dumbbells back to the starting position in a controlled manner.",
    muscleGroups: "Works anterior deltoids",
    variations: "Barbell front raise, cable front raise",
    link: "https://www.youtube.com/watch?v=sOcYlBI85hc"
  },
  {
    namePortuguese: "Rosca Inversa",
    nameEnglish: "Reverse Curl",
    executionMode: "Hold a barbell or dumbbells with an overhand grip and arms fully extended. Flex your elbows to bring the weight up towards your shoulders, keeping your elbows close to your body. Lower the weight back to the starting position in a controlled manner.",
    muscleGroups: "Works forearms and biceps brachialis",
    variations: "Cable reverse curl, seated reverse curl",
    link: "https://www.youtube.com/watch?v=EoYWMB856cA"
  },
  {
    namePortuguese: "Abdominal Bicicleta",
    nameEnglish: "Bicycle Crunch",
    executionMode: "Lie on your back with your hands behind your head and legs lifted. Bring one knee towards your chest while extending the other leg, and simultaneously twist your torso to bring the opposite elbow towards the bent knee. Alternate sides in a pedaling motion.",
    muscleGroups: "Works abs and obliques",
    variations: "Slow bicycle crunch, alternating knee bicycle crunch",
    link: "https://www.youtube.com/watch?v=cbKIDZ_XyjY"
  },
  {
    namePortuguese: "Elevação de Panturrilha Sentado",
    nameEnglish: "Seated Calf Raise",
    executionMode: "Sit on a calf raise machine with your feet flat on the platform and knees at a 90-degree angle. Push through the balls of your feet to lift the weight, raising your heels as high as possible. Lower your heels back down in a controlled manner.",
    muscleGroups: "Works calves (soleus)",
    variations: "Single-leg seated calf raise, dumbbell seated calf raise",
    link: "https://www.youtube.com/watch?v=3ZRe_QpvRPg"
  },
  {
    namePortuguese: "Super-homem",
    nameEnglish: "Superman",
    executionMode: "Lie face down on a mat with your arms extended in front of you and legs straight. Simultaneously lift your arms, chest, and legs off the ground, squeezing your back and glutes at the top. Hold briefly and then lower back down.",
    muscleGroups: "Works lower back, glutes, and shoulders",
    variations: "Alternating arm and leg superman, stability ball superman",
    link: "https://www.youtube.com/watch?v=h2iKcNldw-g"
  },
  {
    namePortuguese: "Rosca Scott",
    nameEnglish: "Preacher Curl",
    executionMode: "Sit at a preacher curl bench and hold an EZ bar with an underhand grip. Rest your upper arms on the pad and curl the bar towards your shoulders, squeezing your biceps at the top. Lower the bar back to the starting position in a controlled manner.",
    muscleGroups: "Works biceps",
    variations: "Dumbbell preacher curl, cable preacher curl",
    link: "https://www.youtube.com/shorts/Pp1VDEfd_us"
  },
  {
    namePortuguese: "Barra Fixa",
    nameEnglish: "Pull-up",
    executionMode: "Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart. Pull your body up until your chin is above the bar, squeezing your shoulder blades together. Lower yourself back to the starting position in a controlled manner.",
    muscleGroups: "Works back, biceps, and shoulders",
    variations: "Wide-grip pull-up, chin-up",
    link: "https://www.youtube.com/shorts/gVr_qmy3Gfg"
  },
  {
    namePortuguese: "Rosca Concentrada em Pé",
    nameEnglish: "Standing Concentration Curl",
    executionMode: "Stand with your feet shoulder-width apart, holding a dumbbell in one hand. Bend forward slightly and place your free hand on your knee for support. Curl the dumbbell towards your shoulder, focusing on squeezing the bicep. Lower the dumbbell back to the starting position in a controlled manner. Repeat on the other arm.",
    muscleGroups: "Works biceps",
    variations: "Seated concentration curl, preacher concentration curl",
    link: "https://www.youtube.com/watch?v=rAxZd2NvJig"
  },
  {
    namePortuguese: "Rosca Alternada com Halteres",
    nameEnglish: "Alternating Dumbbell Curl",
    executionMode: "Stand with your feet shoulder-width apart, holding a dumbbell in each hand. Curl one dumbbell towards your shoulder, keeping your elbow close to your body. Lower the dumbbell back to the starting position and then curl the other side. Continue alternating between arms.",
    muscleGroups: "Works biceps brachii and brachioradialis",
    variations: "Seated alternating dumbbell curl, alternating hammer curl",
    link: "https://www.youtube.com/watch?v=sAq_ocpRh_I"
  },
  {
    namePortuguese: "Rosca 21",
    nameEnglish: "21s",
    executionMode: "Hold a barbell with an underhand grip and perform 7 half-reps from the bottom to mid-point, followed by 7 half-reps from mid-point to the top. Finish with 7 full-range reps, completing a total of 21 reps in one set. Focus on controlling the movement and maintaining tension in your biceps throughout the exercise.",
    muscleGroups: "Works biceps",
    variations: "Dumbbell 21s, cable 21s",
    link: "https://www.youtube.com/watch?v=35GQ5NoH3fs"
  },
  {
    namePortuguese: "Rosca Martelo com Corda",
    nameEnglish: "Rope Hammer Curl",
    executionMode: "Attach a rope to a low pulley and hold it with a neutral grip, palms facing each other. Curl the rope towards your shoulders, keeping your elbows close to your body. Squeeze your biceps at the top of the movement, then lower the rope back to the starting position.",
    muscleGroups: "Works biceps brachialis and brachioradialis",
    variations: "Standing rope hammer curl, seated rope hammer curl",
    link: "https://www.youtube.com/watch?v=V8AR3SGzboU"
  },
  {
    namePortuguese: "Rosca Inversa com Barra",
    nameEnglish: "Reverse Barbell Curl",
    executionMode: "Hold a barbell with an overhand grip, hands shoulder-width apart. Keep your elbows close to your body and curl the bar towards your shoulders. Lower the bar back to the starting position in a controlled manner, maintaining tension in your biceps and forearms throughout the exercise.",
    muscleGroups: "Works biceps brachii, brachioradialis, and forearms",
    variations: "Reverse curl with dumbbells, cable reverse curl",
    link: "https://www.youtube.com/watch?v=hUA-fIpM7nA"
  },
  {
    namePortuguese: "Desenvolvimento Arnold",
    nameEnglish: "Arnold Press",
    executionMode: "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height with your palms facing your body. As you press the dumbbells overhead, rotate your palms outward until they face forward at the top of the movement. Reverse the motion as you lower the dumbbells back to the starting position.",
    muscleGroups: "Works deltoids, triceps, and trapezius",
    variations: "Standing Arnold press, single-arm Arnold press",
    link: "https://www.youtube.com/watch?v=6Z15_WdXmVw"
  },
  {
    namePortuguese: "Elevação Frontal com Barra",
    nameEnglish: "Barbell Front Raise",
    executionMode: "Hold a barbell with an overhand grip, shoulder-width apart. Keeping your arms straight, raise the barbell in front of you to shoulder height. Lower the barbell back to the starting position in a controlled manner. Keep your core engaged and avoid using momentum to lift the weight.",
    muscleGroups: "Works anterior deltoids and upper chest",
    variations: "Dumbbell front raise, cable front raise",
    link: "https://www.youtube.com/watch?v=_ikCPws1mbE"
  },
  {
    namePortuguese: "Elevação Lateral Inclinada",
    nameEnglish: "Incline Lateral Raise",
    executionMode: "Lie on an incline bench set at a 45-degree angle, with your chest against the bench and a dumbbell in each hand. Raise your arms laterally until they are parallel to the ground, keeping a slight bend in your elbows. Lower the dumbbells back to the starting position in a controlled manner.",
    muscleGroups: "Works lateral deltoids and trapezius",
    variations: "Standing incline lateral raise, seated incline lateral raise",
    link: "https://www.youtube.com/watch?v=oneoO9B8xqs"
  },
  {
    namePortuguese: "Agachamento",
    nameEnglish: "Squat",
    executionMode: "Position your feet shoulder-width apart and keep your back straight. Bend your knees and hips, lowering until your thighs are parallel to the floor. Return to the starting position by pushing through your heels. Keep your core tight and chest up during the movement.",
    muscleGroups: "Works quads, glutes, hamstrings, and core",
    variations: "Sumo squat, front squat, jump squat",
    link: "https://www.youtube.com/watch?v=s7i94Okznns"
  },
  {
    namePortuguese: "Supino Reto",
    nameEnglish: "Flat Bench Press",
    executionMode: "The basic movement involves lying on a bench, holding the barbell or dumbbells with hands shoulder-width apart, lowering the weight to your chest, and then pushing it back up to the starting position by extending your arms.",
    muscleGroups: "Works chest, triceps, anterior deltoids",
    variations: "Incline bench press, decline bench press, dumbbell bench press",
    link: "https://www.youtube.com/watch?v=fG_03xSzT2s"
  },
  {
    namePortuguese: "Levantamento Terra",
    nameEnglish: "Deadlift",
    executionMode: "To perform a deadlift correctly, place your feet shoulder-width apart and the bar close to your shins. Grip the bar with hands shoulder-width apart and keep your back straight. Push through your heels, lifting the bar while extending your hips and knees, keeping the bar close to your body. At the top, stand upright with hips and knees extended. To lower, hinge at the hips while keeping your back straight, controlling the descent to the floor. Avoid rounding your back and prioritize leg strength. Breathe steadily for stability.",
    muscleGroups: "Works legs, glutes, back, core, and arms",
    variations: "Sumo deadlift, stiff-legged deadlift",
    link: "https://www.youtube.com/watch?v=50AkPBZwACQ"
  },
  {
    namePortuguese: "Rosca Direta",
    nameEnglish: "Barbell Curl",
    executionMode: "Hold the barbell with palms facing up, shoulder-width apart. Flex your elbows, bringing the bar towards your shoulders without moving your shoulders. Lower the bar back to the starting position in a controlled manner.",
    muscleGroups: "Works biceps brachii and brachioradialis",
    variations: "Dumbbell curl, hammer curl",
    link: "https://www.youtube.com/watch?v=cQW4YaRPfrg"
  },
  {
    namePortuguese: "Tríceps Pulley",
    nameEnglish: "Triceps Pushdown",
    executionMode: "Stand facing the pulley machine and grip the bar with palms facing down. Keeping your elbows fixed at your sides, push the bar down until your arms are fully extended. Return to the starting position in a controlled manner.",
    muscleGroups: "Works triceps brachii",
    variations: "Rope pushdown, reverse grip pushdown",
    link: "https://www.youtube.com/watch?v=re-ILvqD1RE"
  },
  {
    namePortuguese: "Elevação Lateral",
    nameEnglish: "Lateral Raise",
    executionMode: "Hold a dumbbell in each hand, with your arms by your sides. Raise your arms laterally until they are at shoulder height, keeping a slight bend in your elbows. Lower the dumbbells back to the starting position in a controlled manner.",
    muscleGroups: "Works lateral deltoids",
    variations: "Incline lateral raise, machine lateral raise",
    link: "https://www.youtube.com/watch?v=IwWvZ0rlNXs"
  },
  {
    namePortuguese: "Remada Curvada",
    nameEnglish: "Bent-over Row",
    executionMode: "With a barbell, lean slightly forward with a straight back and bent knees. Pull the barbell towards the lower chest, keeping your elbows close to your body. Return to the starting position in a controlled manner.",
    muscleGroups: "Works back, biceps, trapezius",
    variations: "Dumbbell row, T-bar row",
    link: "https://www.youtube.com/watch?v=TfxJMertfsw"
  },
  {
    namePortuguese: "Desenvolvimento com Halteres",
    nameEnglish: "Dumbbell Shoulder Press",
    executionMode: "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height. Push the dumbbells upward until your arms are fully extended. Lower them back to shoulder height in a controlled manner.",
    muscleGroups: "Works deltoids, trapezius, triceps",
    variations: "Military press, machine shoulder press",
    link: "https://www.youtube.com/watch?v=EuQAfhXBEvs"
  },
  {
    namePortuguese: "Afundo",
    nameEnglish: "Lunge",
    executionMode: "Step forward with one leg and lower your body until both knees are bent at 90-degree angles. Push back up to the starting position with your front leg and repeat with the other leg.",
    muscleGroups: "Works quads and glutes",
    variations: "Dumbbell lunge, reverse lunge",
    link: "https://www.youtube.com/watch?v=SNUWg0De4RE"
  },
  {
    namePortuguese: "Leg Press",
    nameEnglish: "Leg Press",
    executionMode: "Sit on the leg press machine with your feet shoulder-width apart on the platform. Push the platform upwards until your legs are almost fully extended, then lower it in a controlled manner until your knees form a 90-degree angle.",
    muscleGroups: "Works quads and glutes",
    variations: "Incline leg press, horizontal leg press",
    link: "https://www.youtube.com/watch?v=19Of2ks_EWI"
  },
  {
    namePortuguese: "Puxada Frontal",
    nameEnglish: "Lat Pulldown",
    executionMode: "Sit at the machine and grip the bar with your hands spread apart. Pull the bar towards your chest while keeping your torso stable and elbows pointing downward. Return to the starting position in a controlled manner.",
    muscleGroups: "Works lats, trapezius, biceps",
    variations: "Close-grip pulldown, reverse pulldown",
    link: "https://www.youtube.com/watch?v=7cCiQUdIXWw"
  },
  {
    namePortuguese: "Crucifixo com Halteres",
    nameEnglish: "Dumbbell Fly",
    executionMode: "Lie flat on a bench with a dumbbell in each hand, arms extended above your chest. Lower the dumbbells laterally, keeping a slight bend in your elbows, until you feel a stretch in your chest. Return to the starting position.",
    muscleGroups: "Works pectoralis major, anterior deltoids",
    variations: "Incline fly, machine fly",
    link: "https://www.youtube.com/watch?v=uy9Xk3SVrms"
  },
  {
    namePortuguese: "Elevação de Panturrilha",
    nameEnglish: "Calf Raise",
    executionMode: "Stand with your feet shoulder-width apart and raise yourself onto your toes. Lower yourself in a controlled manner until your heels are almost touching the ground, and repeat.",
    muscleGroups: "Works calves (gastrocnemius and soleus)",
    variations: "Seated calf raise, machine calf raise",
    link: "https://www.youtube.com/watch?v=BPpM8bq-LqM"
  },
  {
    namePortuguese: "Stiff com Barra",
    nameEnglish: "Romanian Deadlift",
    executionMode: "Hold the barbell with hands shoulder-width apart and keep your back straight. Slightly bend your knees and lower the barbell by hinging at the hips until you feel a stretch in your hamstrings. Return to the starting position.",
    muscleGroups: "Works hamstrings, glutes",
    variations: "Dumbbell Romanian deadlift, kettlebell Romanian deadlift",
    link: "https://www.youtube.com/watch?v=u1E3_u2gJYE"
  },
  {
    namePortuguese: "Desenvolvimento Militar",
    nameEnglish: "Military Press",
    executionMode: "Hold the barbell with hands shoulder-width apart and bring it to chest height. Press the barbell overhead until your arms are fully extended. Lower it back to chest height in a controlled manner.",
    muscleGroups: "Works deltoids, triceps",
    variations: "Dumbbell military press, behind-the-neck press",
    link: "https://www.youtube.com/watch?v=EuQAfhXBEvs&t=77s"
  },
  {
    namePortuguese: "Pullover com Halteres",
    nameEnglish: "Dumbbell Pullover",
    executionMode: "Lie on a flat bench with your shoulders supported and feet on the floor. Hold a dumbbell with both hands above your chest and lower it behind your head. Bring the dumbbell back to the starting position.",
    muscleGroups: "Works lats, chest",
    variations: "Barbell pullover, machine pullover",
    link: "https://www.youtube.com/watch?v=-KaMXMMIVrU"
  },
  {
    namePortuguese: "Prancha",
    nameEnglish: "Plank",
    executionMode: "Support yourself on your forearms and toes, keeping your body straight and contracting your core.",
    muscleGroups: "Works abs, core",
    variations: "Side plank, plank with leg raises",
    link: "https://www.youtube.com/watch?v=qNRqGqESAWU"
  },
  {
    namePortuguese: "Remada Cavalinho",
    nameEnglish: "T-bar Row",
    executionMode: "Hold the T-bar handle with both hands and lean forward with your knees slightly bent. Pull the bar towards your abdomen, keeping your elbows close to your body, and return to the starting position.",
    muscleGroups: "Works back, trapezius, biceps, rhomboids",
    variations: "Unilateral row, low machine row",
    link: "https://www.youtube.com/watch?v=b-n8m51UIxc"
  },
];