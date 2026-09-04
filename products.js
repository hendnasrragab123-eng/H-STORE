// ==========================================
// ملف المنتجات (products.js)
// ==========================================

const products = [
    {
      id: 1,
      name: "   انسيال لازوردي",
      category: "bracelets",
      price: 120,
     // بدل صورة واحدة، حطي قائمة صور للمنتج هنا 👇
    images: [
        "images/bracelet1.jpg",
        "images/bracelet1_2.jpg",
        "images/bracelet1_3.jpg",
        "images/bracelet1_4.jpg",
      ],
      subText: "مقاوم للماء والصدأ جولتد بليتتد ✨"
    },
    {
      id: 2,
      name: "  انسيال رقيق",
      category: "bracelets",
      price: 125,
      images: [
         "images/hind1.jpg", // 👈 اسم صورتك الثاني
         "images/hind2.jpg",
         "images/hind3.jpg",
         "images/hind4.jpg",
      ],
         subText: "تصميم رقيق ومميز 🌸"
    },
    {
      id: 3,
      name: " كومبو تيوليب وسلسلة البجعة ",
      category: "compo",
      price: 200,
      images:[
         "images/h1.jpg",
         "images/h2.jpg", 
         "images/h3.jpg",
      ],
      subText: "  كومبو تريندي   💖"
    },
    {
      id: 4,
      name: "طقم cd استانلس بيور",
      category: "compo",
      price: 210,
      image: "images/hi1.jpg",
      subText: "مقاوم للماء   "
    },
    {
      id: 5,
      name: " سلسلة دروب دلاية   ",
      category: "neckles",
      price: 140,
      image: "images/hin1.jpg",
      subText: "   جولد بليتند"
    },
    {
      id: 6,
      name: " هاند تشين تحفهه 🙈❤️‍🔥 ",
      category: "chains",
      price: 150,
      image: "images/hand.jpg",
      subText: "ستانلس ستيل  🩵"
    },
    {
        id: 7,
        name: " كومبوو اسااور 6قطع  ",
        category: "compo",
        price: 300,
        image: "images/compo.jpg",
        subText: "ستانلس بيور  🩵"
      },
    {
        id: 8,
        name: " طقم غوايش ال 6 الكارتير مختومين 🙈❤️‍🔥    ",
        category: "bracelets",
        price: 180,
        image: "images/a.jpg",
        subText: "ستانلس بيور  🩵"
      },
      {
          id: 9,
          name: " انسيال 3كوينز",
          category: "bracelets",
          price: 135,
          images:[
           "images/b1.jpg",
           "images/b2.jpg",
           "images/b3.jpg",
          ],
          subText: "ستانلس بيور  🩵"
        },
        {
            id: 10,
            name: " كومبوو 4قطع  ",
            category: "compo",
            price: 240,
            image: "images/c.jpg",
            subText: "ستانلس بيور  🩵"
          },
          {
              id: 11,
              name: " عرض 4قطع  ",
              category: "compo",
              price: 210,
              image: "images/d.jpg",
              subText: "ستانلس بيور  🩵"
            },
            {
                id: 12,
                name: " انسيال جولد بليتيند ",
                category: "bracelets",
                price: 125,
                images:[
                 "images/e1.jpg",
                 "images/e2.jpg",
                 "images/e3.jpg",
                 "images/e4.jpg",
                 "images/e5.jpg",
                 "images/e6.jpg",
                 "images/e7.jpg",
                 "images/e8.jpg",
                 "images/e9.jpg",
                 "images/e10.jpg",
                 "images/e11.jpg",
                 "images/e12.jpg",
                 "images/e13.jpg",
                 "images/e14.jpg",
                 "images/e15.jpg",
                 "images/e16.jpg",
                 "images/e17jpg",
                 "images/e18.jpg",
                 "images/e19.jpg",
                 "images/e20.jpg",
                 "images/e21.jpg",
                 "images/e22.jpg",
                 "images/e23.jpg",
                 "images/e24.jpg",
                 
                 
                ],
                subText: "متاح كل الالوان   🩵"
              },
              {
                id: 13,
                name: " كوليه المحجباات  ",
                category: "neckles",
                price: 180,
                images:[
                    "images/f1.jpg",
                    "images/f2.jpg",
                   ],
                subText: " 🙈❤️‍🔥❤️‍🔥 "
              },
              {
                id: 14,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 140,
                image: "images/g.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 15,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 170,
                image: "images/i.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 15,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 150,
                image: "images/j.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 16,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 150,
                image: "images/k.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 17,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 170,
                image: "images/l.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 18,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 170,
                image: "images/m.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 19,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 135,
                image: "images/n.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 20,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 170,
                image: "images/o.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 21,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 150,
                image: "images/p.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 22,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 170,
                image: "images/q.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 23,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 135,
                image: "images/r.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 24,
                name: " خاتم تيبكل الدهب🫣❤️‍🔥  ",
                category: "rings",
                price: 145,
                image: "images/s.jpg",
                subText: "   جولد بليتند"
              },
              {
                id: 25,
                name: " نص طقم سبيكه  🙈❤️‍🔥❤️‍🔥    ",
                category: "compo",
                price: 160,
                image: "images/u.jpg",
                subText: "    compo"
              },
              {
              id: 26,
                name: " حلق فراشه تكه 🙈❤️‍🔥❤️‍🔥   ",
                category: "earings",
                price: 95,
                images:[
                    "images/v1.jpg",
                    "images/v2.jpg",
                    "images/v3.jpg",
                   ],
                subText: " استانلس بيور 🙈❤️‍🔥 "
              },
              {
                id: 27,
                 name: "   حلق تكه اسكوير تبيكل الذهب    ",
              category: "earings",
              price: 135,
              images:[
                  "images/w1.jpg",
                   "images/w2.jpg",
                  "images/w3.jpg",
                  "images/w4.jpg",
                     ],
                  subText: "Gold plated "
                },
                {
                id: 28,
                 name: "حلق لازوردي تكه فصوص🙈🤍 ",
                category: "earings",
                price: 125,
              images:[
                    "images/x1.jpg",
                    "images/x2.jpg",
                    "images/x3.jpg",
                    "images/x4.jpg",
                         ],
                    subText: "Gold plated "
                 },
                 {
                        id: 29,
                     name: " حلق سبركل تحفه🙈🤍    ",
                     category: "earings",
                      price: 125,
                    image: "images/y.jpg",
                     subText: "Gold plated 👀🤍"
                      },
                      {
                        id: 30,
                     name: "انسيال حمصات🙈🤍",
                     category: "bracelets",
                     price: 75,
                     images:[
                          "images/z2.jpg",
                          "images/z3.jpg",
                          "images/z4.jpg",
                          "images/z5.jpg",
                          "images/z6.jpg",
                             ],
                      subText: " Stainless steel 👀🤍 "
                        },
                        {
                      id: 31,
                      name: " انسيال حلقات🙈🤍",
                      category: "bracelets",
                      price: 80,
                      images:[
                         "images/A1.jpg",
                         "images/A2.jpg",
                         "images/A3.jpg",
                                 ],
                              subText: " Stainless steel 🙈💞 "
                            },
                            {
                                id: 32,
                                name: " طقم لازوردي كامل 🙈🤍🤍🤍🤍 ",
                                category: "compo",
                                price: 300,
                                image: "images/B.jpg",
                                subText: "Gold plated 👀🤍"
                              },
                            {
                                id: 33,
                                name: "   حلق الوان استانلس ستيل  ",
                                category: "earings",
                                price: 125,
                                image: "images/Cc.jpg",
                                subText: "white  "
                              },
                             {
                              id: 34,
                             name: "   حلق تريندي نفخ جولد بلاتيد   ",
                            category: "earings",
                            price: 125,
                            image:
                                 "images/Dd.jpg",
                                subText: "Gold plated 👀🤍"
                              },
                             {
                                id: 35,
                                  name: "   حلق تريندي نفخ جولد بلاتيد   ",
                                  category: "earings",
                                  price: 125,
                                  image:
                                   "images/Ee.jpg",
                                  subText: "Gold plated 👀🤍"
                                },
                             {
                                    id: 35,
                                      name: "   حلق تريندي نفخ جولد بلاتيد   ",
                                      category: "earings",
                                      price: 125,
                                      image:
                                       "images/Ff.jpg",
                                      subText: "Gold plated 👀🤍"
                                    },
                                {
                                   id: 36,
                                  name: "   حلق تريندي نفخ جولد بلاتيد   ",
                                 category: "earings",
                                  price: 125,
                                   image:
                                  "images/Gg.jpg",
                                   subText: "Gold plated 👀🤍"
                                        },
                                     {
                                     id: 37,
                                     name: "   حلق تريندي نفخ جولد بلاتيد   ",
                                     category: "earings",
                                     price: 125,
                                     image:
                                    "images/Hh.jpg",
                                     subText: "Gold plated 👀🤍"
                                            },
                                        {
                                     id: 38,
                                     name: "   حلق تريندي نفخ جولد بلاتيد   ",
                                      category: "earings",
                                     price: 125,
                                    image:
                                   "images/Ii.jpg",
                                   subText: "Gold plated 👀🤍"
                                       },
                                    {
                       id: 39,
                       name: "   حلق تريندي نفخ جولد بلاتيد   ",
                       category: "earings",
                       price: 125,
                       image:
                       "images/Jj.jpg",
                        subText: "Gold plated 👀🤍"
                        },
                      {
                      id: 40,
                      name: "  حلق الوان استانلس ستيل",
                      category: "earings",
                       price: 125,
                        image:
                      "images/Kk.jpg",
                     subText: "  black"
                     },
                      {
                        id: 41,
                          name: "   حلق تريندي نفخ جولد بلاتيد   ",
                            category: "earings",
                            price: 125,
                             image:
                           "images/Ll.jpg",
                            subText: "Gold plated 👀🤍"
                                },
                      {
                        id: 42,
                        name: "   حلق تريندي نفخ جولد بلاتيد   ",
                            category: "earings",
                            price: 125,
                            image:
                            "images/Mm.jpg",
                            subText: "Gold plated 👀🤍"
                         
                       },
                       {
                        id: 43,
                          name: "   حلق تريندي نفخ جولد بلاتيد   ",
                          category: "earings",
                          price: 125,
                         image:
                        "images/Nn.jpg",
                         subText: "Gold plated 👀🤍"
                         },
                         {
                          id: 44,
                            name: "   حلق تريندي نفخ جولد بلاتيد   ",
                              category: "earings",
                              price: 125,
                               image:
                             "images/Oo.jpg",
                              subText: "Gold plated 👀🤍"
                                  },
                         {
                        id: 45,
                         name: " حلق الوان استانلس ستيل  ",
                         category: "earings",
                         price: 125,
                        image:
                       "images/Pp.jpg",
                       subText: "broun  "
                           },
                       {
                        id: 46,
                       name: "   حلق تريندي نفخ جولد بلاتيد   ",
                      category: "earings",
                       price: 125,
                      image:
                     "images/Qq.jpg",
                      subText: "Gold plated 👀🤍"
                          },
                       {
                      id: 47,
                       name: "   حلق الوان استانلس ستيل  ",
                      category: "earings",
                      price: 125,
                       image:
                     "images/Rr.jpg",
                       subText: "  green"
                          },
                      {
                        id: 48,
                        name: "   حلق تريندي نفخ جولد بلاتيد   ",
                        category: "earings",
                        price: 125,
                        image:
                       "images/Ss.jpg",
                       subText: "Gold plated 👀🤍"
                    },
                      {
                    id: 49,
                    name: "سلسلة انت عمري 🤩❤️‍🔥❤️‍🔥❤️‍🔥  ",
                    category: "nickles",
                     price: 135,
                    image:
                     "images/Tt.jpg",
                     subText: "Gold plated 👀🤍"
                           },
                     {
                     id: 50,
                     name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                     category: "bracelets",
                     price: 225,
                    image:
                     "images/Uu.jpg",
                      subText: "Gold plated 👀🤍"
                        },
                    {
                    id: 51,
                    name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                   category: "bracelets",
                    price: 225,
                    image:
                   "images/Vv.jpg",
                     subText: "Gold plated 👀🤍"
                       },
                       
                     {
                      id: 52,
                     name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                     category: "bracelets",
                     price: 225,
                    image:
                     "images/Ww.jpg",
                     subText: "Gold plated 👀🤍"
                        },
                      {
                     id: 53,
                     name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                     category: "bracelets",
                     price: 225,
                      image:
                     "images/Xx.jpg",
                       subText: "Gold plated 👀🤍"
                          }, 
                       {
                       id: 54,
                      name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                      category: "bracelets",
                       price: 225,
                      image:
                     "images/Yy.jpg",
                     subText: "Gold plated 👀🤍"
                        },
                       {
                       id: 55,
                       name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                       category: "bracelets",
                       price: 225,
                       image:
                       "images/Zz.jpg",
                       subText: "Gold plated 👀🤍"
                       }, 
                     {
                      id: 56,
                       name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                      category: "bracelets",
                      price: 225,
                      image:
                     "images/ab.jpg",
                      subText: "Gold plated 👀🤍"
                        }, 
                      {
                      id: 57,
                     name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                       category: "bracelets",
                       price: 225,
                       image:
                       "images/ac.jpg",
                       subText: "Gold plated 👀🤍"
                          },
                         {
                       id: 58,
                       name: "انسيالات فصوص زيركون تجننن❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥🤩   ",
                        category: "bracelets",
                         price: 225,
                        image:
                        "images/ad.jpg",
                       subText: "Gold plated 👀🤍"
                        }, 
                      {
                        id: 59,
                        name: "  انسيال جروميت سبيكه 🤩❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥 ",
                         category: "bracelets",
                         price: 225,
                         images:[
                         "images/af.jpg",
                         "images/ag.jpg",
                        ],
                         subText: "Gold plated 👀🤍"
                              },
                       {
                      id: 60,
                      name: "  انسيال جروميت سبيكه 🤩❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥 ",
                      category: "bracelets",
                      price: 110,
                     images:[
                     "images/ah.jpg",
                      "images/ai.jpg",
                        ],
                    subText: "Gold plated 👀🤍"
                        },
                     {
                     id: 61,
                     name: "دروب. نكليس اشكال بحر 🌊 نجمه وصدف حلوه اوي 🤩♥️✨",
                     category: "nickles",
                      price: 210,
                     images:[
                      "images/aj.jpg",
                      "images/ak.jpg",
                      "images/al.jpg",
                      "images/am.jpg",

                            ],
                     subText: "Gold plated 👀🤍"
                            },                           
                        {
                      id: 62,
                     name: "هاند تشين تريند ❤️‍🔥❤️‍🔥❤️‍🔥 ",
                     category: "bracelets",
                     price: 130,
                     images:[
                    "images/an.jpg",
                    "images/ao.jpg",
                    "images/ap.jpg",
                    "images/aq.jpg",
                    "images/ar.jpg",
                    "images/as.jpg",
                    "images/at.jpg",
                      ],
                    subText: "Gold plated 👀🤍"
                        },                           
                     {
                    id: 63,
                    name: "اسويره كف ام سعيد تريند الدهب",
                    category: "bracelets",
                    price: 235,
                    images:[
                   "images/au.jpg",
                   "images/av.jpg",
                     ],
                    subText: "Gold plated 👀🤍"
                       }, 
                     {
                      id: 64,
                     name: "اسويره كف ام سعيد تريند الدهب ",
                     price: 235,
                     images:[
                    "images/aw.jpg",
                     "images/ax.jpg",
                    "images/ay.jpg",
                    "images/az.jpg",
                    "images/ba.jpg",
                    "images/bb.jpg",
                    "images/bc.jpg",
                    "images/bd.jpg",
                    "images/be.jpg",
                    "images/bf.jpg",
                      ],
                     subText: "Gold plated 👀🤍"
                          },                                                       
             ];
             