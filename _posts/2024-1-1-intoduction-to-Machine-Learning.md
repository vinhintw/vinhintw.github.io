---
layout: post
title: "Introduction to Machine Learning"
desc: <div class="tag">Machine Learning</div></br>An Introduction to Machine Learning.
img: ../public/post-assets/MachineLearning/introduction/title.png
comments: true
---

In today's era, the power of **AI - Artificial Intelligence**, and more specifically **Machine Learning**, has sparked an incessant technological wave spreading everywhere. It's not just a hot topic within academic circles; it has extended its reach, dominating the industrial world. Leading technology conglomerates like Google, Facebook, Microsoft, and promising startups are heavily investing in this field. This has led to the emergence of a myriad of innovative applications, not confined solely to computer science but also transcending into other fields like physics, chemistry, medicine, and even politics.

The pinnacle of Machine Learning's extraordinary power can be witnessed through AlphaGo, an immensely intelligent machine capable of computations in a space larger than the number of particles in the universe. It not only surpassed any grandmaster but also emphasized the superiority of Machine Learning over traditional methods.

However, this is just a limited view of the proliferation of Artificial Intelligence. In reality, AI - Artificial Intelligence, and more specifically, Machine Learning, have marked a significant stride in the fourth industrial revolution. This technology doesn’t just limit itself to some prominent applications like Google and Tesla's self-driving cars, Netflix's movie recommendation system, Facebook's facial recognition system, Apple's virtual assistant Siri, and most recently, OpenAI's ChatGPT, but it also opens an infinite space for its application. From [Jarvis - Mark Zuckerberg's intelligent home assistant](https://www.facebook.com/zuck/posts/10103351073024591) to a plethora of other AI/Machine Learning applications, they have adjusted and improved our lives in an undeniable manner.

Based on the definition provided by ChatGPT language model, _Machine learning is a field of artificial intelligence focused on developing algorithms and models that can learn from data to make predictions, recognize patterns, and discover structures without being explicitly programmed for every task_. It can be said that the primary purpose of Machine Learning is to enable computers to have some basic cognitive abilities similar to humans:
1. Listening, seeing, understanding language, solving problems, programming, etc.
2. Assisting humans in handling the enormous amount of information we face daily, also known as Big Data.

Indeed, **Big Data** is not just a simple scientific field. It is a common term put forward by the media to indicate the explosion of data in today's era. It’s no different from terms like the "industrial revolution" or the "software age." Big Data is the natural result of the robust development of the Internet, with social networks like Facebook, Instagram, Twitter contributing to the increased need for sharing information. Even YouTube, a platform where people share videos and interact through comments, can be considered a social network.

To comprehend the scale of Big Data, consider these figures (as of the time of writing):
- Nearly 300 hours of video are uploaded to YouTube every minute (according to [https://www.youtube.com/yt/press/statistics.html](https://www.youtube.com/yt/press/statistics.html)).
- Over 900 million people use Facebook daily, with 82.8% of these users coming from outside the US and Canada (according to [http://newsroom.fb.com/company-info/](http://newsroom.fb.com/company-info/)).
- Google processes about 100 billion searches each month, equivalent to 3.3 billion searches per day and 38,000 searches per second. Remarkably, these numbers are constantly increasing every second! (according to [http://www.internetlivestats.com/google-search-statistics/](http://www.internetlivestats.com/google-search-statistics/)).

However, the information explosion is not the sole reason for the emergence of Big Data. Although Big Data has only appeared in recent years, the accumulated data from the inception of the Internet at the end of the previous century was substantial. Initially, humans only knew how to store and copy data without knowing how to use it. However, one day, scientists realized that within that data lay an immense amount of knowledge - knowledge that could help us understand humans and society more deeply.

From a user's list of favorite movies, we can infer their preferences and suggest movies they might not have seen but are compatible with those preferences. From the search history of the online community, we can identify emerging issues and focus on developing more information about those issues. The emergence of Big Data truly began when we realized the value of hidden information in data and had the resources and technology to exploit them on a large scale. It's no surprise that machine learning plays a significant role in this technology. The relationship between machine learning and Big Data is a mutually supportive link: machine learning advances due to the enhancement of data volume from Big Data, and conversely, the value of Big Data depends on the ability to extract knowledge from data using machine learning.

Machine learning is not a novel concept; in fact, it has existed long before the Internet emerged. One of the earliest machine learning algorithms was the perceptron, developed by Frank Rosenblatt in 1957. This algorithm was useful in classifying two different concepts. An illustration of its application is in classifying spam emails (represented by a triangle) and regular emails (represented by a square). This often posed difficulties in visualizing how this classification should be done. The perceptron accomplishes this by creating a straight line on the plane to divide the two sets of points.
<div style="align-items: center; justify-content: center; max-width: 50%; max-height: 50%;">
<img class="image" src="/public/post-assets/MachineLearning/introduction/classification1.png" alt="Image">
</div>

The triangle and square points represent emails labeled beforehand and are used to "train" the perceptron. Once the dividing line for the two sets of points is drawn, the perceptron can label the unlabeled points representing emails needing classification.

The email classification process is described as follows: Firstly, we need an algorithm to convert emails into data. This step is crucial because if we can choose an appropriate representation, the perceptron will work much more effectively. Next, the perceptron will use information from each data point to update the parameters of the line it's trying to find. You can take a look at a perceptron demo (green dots represent the points the perceptron is handling).

<div style="text-align:center;">
<iframe width="95%" height="500" src="https://www.youtube.com/embed/vGwemZhPlsA?si=mDIm0mZk0jCjeflF" frameborder="0" allowfullscreen></iframe>
<div class="thecap">Perceptron algorithm</div>
</div>

However, because this is a relatively simple algorithm, it may encounter several issues, such as points to classify lying on the dividing line or in more complex datasets, where no straight dividing line exists.
<div style="align-items: center; justify-content: center; max-width: 50%; max-height: 50%;">
<img class="image" src="/public/post-assets/MachineLearning/introduction/clasification-hard.png" alt="Image">
</div>

This necessitates non-linear separation methods. But that's a different story.

The perceptron is a **supervised learning** algorithm: we provide the computer with examples along with the correct answers, hoping the computer will learn and predict for unknown examples in the future. There are also machine learning algorithms that don’t require the correct answers, known as **unsupervised learning**. In this case, the computer tries to discover hidden structures within the dataset without needing correct answers. Another type of machine learning is **reinforcement learning**. In this form, the computer doesn't receive correct answers but instead receives feedback for each action and adjusts its behavior based on positive or negative feedback. I will delve deeper into reinforcement learning and learning methods in another post.

Next, I'd like to introduce a bit about **deep learning**. In recent years, with remarkable advancements in computing capabilities and the accumulation of enormous data from leading technology conglomerates, the field of Machine Learning has advanced further, opening up a new realm called Deep Learning. Deep Learning has enabled computers to perform tasks that seemed impossible ten years ago: from classifying thousands of different objects in images, automatically captioning images, simulating human speech and handwriting, to interacting with humans, and even composing literature or music. (See more: [8 Inspirational Applications of Deep Learning](http://machinelearningmastery.com/inspirational-applications-deep-learning/))

<hr>
<div class="imgcap">
<div>
    <img src="/public/post-assets/MachineLearning/introduction/title.png" width = "800">
</div>
<div class="thecap">The relationship between AI, Machine Learning, and Deep Learning. <br> (Source: <a href="https://blogs.nvidia.com/blog/2016/07/29/whats-difference-artificial-intelligence-machine-learning-deep-learning-ai/">What’s the Difference Between Artificial Intelligence, Machine Learning, and Deep Learning?</a>)</div>
</div>
<hr>


## Further Reading

### Courses

#### English
1. [Machine Learning by Andrew Ng on Coursera](https://www.coursera.org/learn/machine-learning) (_Most renowned course on Machine Learning_)
2. [Deep Learning by Google on Udacity](https://www.udacity.com/course/deep-learning--ud730) (_An advanced course on Deep Learning with Tensorflow_)
3. [Machine Learning mastery](http://machinelearningmastery.com/) (_Fundamental Machine Learning algorithms_)
