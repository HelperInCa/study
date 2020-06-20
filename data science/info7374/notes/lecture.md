# Intro to ML

## L 2

- avoid **logical fallacy**(the Texas sharpshooter fallacy): shoot first, then draw target

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062835.jpg)



## L 3

- Before convert dataframe to an array, 

  a) Convert object types and string types to category type 

  b) map and convert cateogries of numbers.

- seaborn: dont know how to code on a spot you want? see https://seaborn.pydata.org/examples/index.html

## L 4

- Bias-Variance Tradeoff

- Diagnose and Fix 

  under and overfit ML models

- Classifier Performance Metrics 

  confusion matrix, precision, recall, accuracy, FI score, ...

  > - Accuracy
  >
  >   - Deal with imbalanced datasets, dont use this metric only.
  >   - rebalance: sc-learn
  >
  >   
  >
  > - F1 Score: 
  
- ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062844.jpg)

## L5

- code: 

  - explore underfit model(tune K value)

    train 

  - caculate Confusion matrix, recall, and precision

  - show Receiver Operating Characteristic (ROC) and Area Under the Curve (AUC)



## L6

- random forests: 
  - why choose:
    1. minimal data pre-processing, non-parametric assumptions
    2. trivially parallelizable: change a liittle 
    3. easy to implement, tune
    4. highly non-linear and generalizable models
    5. predictive & interpretable models
    
  - decision tree
  
  - Grow your trees with what?
    - Gini: impurity, one class sample has 0 impurity, aim at making each split more pure
    - Entropy:  how much info is encoded in a decision, higher gains = better quality decision, calculate the probability distributions from frequencies
    
  - ensembling
    bagging in random forests
    
    see also [ensemble learning](https://towardsdatascience.com/basic-ensemble-learning-random-forest-adaboost-gradient-boosting-step-by-step-explained-95d49d1e2725)



## L7

- EDA(exploratory data analysis)

  -  steps of caculating feature importance score:
    1. caculate RMSE after predicting the Y values
    2. randomly shuffle the first colum or feature
    3. calculate RMSE after shuffle the colum or feature
    4. substract the before shuffling RMSE from after shuffling RMSE
    5. RMSE of unshuffled datadata - RMSE of feature X shuffled data = feature importance score
    6. do the same for all colums

- Big data (avito kaggle challenge: predict demand for online AD)

  - **pandas.read_csv(parse_dates=*False*)**: bool/ list of int / names / list of lists / dict, default False

    The behavior is as follows:

    - boolean. If True -> try parsing the index.
    - list of int or names. e.g. If [1, 2, 3] -> try parsing columns 1, 2, 3 each as a separate date column.
    - list of lists. e.g. If [[1, 3]] -> combine columns 1 and 3 and parse as a single date column.
    - dict, e.g. {‘foo’ : [1, 3]} -> parse columns 1, 3 as date and call result ‘foo’

- R-squared(Coefficient of determination) 

  ![{\displaystyle R^{2}\equiv 1-{SS_{\rm {res}} \over SS_{\rm {tot}}}\,}](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062847.jpg)
  
  > - The total sum of squares (proportional to the variance of the data):
  >   
  >     ![SS_{\text{tot}}=\sum _{i}(y_{i}-{\bar {y}})^{2},](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062848.jpg)
  >   
  > - The sum of squares of residuals, also called the residual sum of squares:
  >
  >     ![{\displaystyle SS_{\text{res}}=\sum _{i}(y_{i}-f_{i})^{2}=\sum _{i}e_{i}^{2}\,}](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062852.jpg)
  
  - R^2 range:
    1. R^2 = 0: prediction = mean of actual data
    2. R^2 < 0: prediction worse than mean of actual data
    3. R^2 = 1: prediction = exactly the same as actual data
  



## L8

- neural networks, shallow and deep

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062857.jpg)

- classic ML vs. Deep neural networks(DNN)

  **Details:** [intro to DL](https://medium.com/@srnghn/introduction-to-deep-learning-what-do-i-need-to-know-75794ebc4a62)

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062904.jpg)

  > diff: 
  >
  > DNN transfer the space rather than dataset

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062911.jpg)

  

  - Packages/Frameworks![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062917.jpg)

    > The **High bandwidth**, hiding the latency under thread parallelism and **easily programmable** registers makes **GPU** a lot **faster** than a **CPU**.

- DNN

  

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062914.jpg)

![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062920.jpg)

- Complete CNN architecture

  **see also** [CNN(cn)](https://juejin.im/entry/5acc5ff551882555627d9ca8), [CNN(en)](https://medium.com/@RaghavPrabhu/understanding-of-convolutional-neural-network-cnn-deep-learning-99760835f148)

<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g8ynmxh61sj30r307tmxf.jpg" alt="Complete CNN architecture" style="zoom:100%;">

> Summary:
>
> - Provide input image into convolution layer
> - Choose parameters, apply filters with strides, padding if requires. Perform convolution on the image and apply ReLU activation to the matrix.
> - Perform pooling to reduce dimensionality size
> - Add as many convolutional layers until satisfied
> - Flatten the output and feed into a fully connected layer (FC Layer)
> - Output the class using an activation function (Logistic Regression with cost functions) and classifies images.



## L9

[Code](https://github.com/HelperInCa/study/blob/master/data%20science/module9/DNN%20for%20Classification.ipynb)

## L10

<font size="6">Linear algebra in DL</font>

- 1 matrix = 1 layer
- different features = diff dimesions

## L11

<font size="6">The activations | loss functions | SGD of neural networks</font>



- [Activation functions](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)

  - Sigmoid & tanh

    ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062938.jpg)

  - **ReLU** 

    ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062933.jpg)



- [Loss function for DNN: Binary cross entropy](https://towardsdatascience.com/understanding-binary-cross-entropy-log-loss-a-visual-explanation-a3ac6025181a)

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062947.jpg)

  

- SGD(the 2nd pic in [this](https://medium.com/@RosieCampbell/demystifying-deep-neural-nets-efb726eae941))

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-062952.jpg)



## L12

<font size="6">CNN theory code</font>

[Paper: Deep Spreadsheets with ExcelNet](https://github.com/HelperInCa/study/blob/master/data science/module12/deepexcelnet.pdf)

[Notebook.xlsx((MNIST))](https://github.com/HelperInCa/study/blob/master/data science/module12/CNN_notebook.xlsx)

- **convolution**: **shrink** the size and **amplify** the signal. so don't conv too many times, or it will be nothing

- **dropout**: avoid overfitting, 0.0 - 0.9

- maxpool

- dense weights

- dense activation

  

[Code (cat or dog)](https://github.com/HelperInCa/study/blob/master/data%20science/module12/CNN%20code.ipynb)



## L13

- Q&A

  - data scientist vs. software engineer

    - data scientist: want to see more difference when change something
    - software engineer: function, product

  - what can you do next?
  - course
    - practice: kaggle(learn from other kernels)
  - data science tracks
    - generalist
    - nlp
    - computer vision
  - data engineer
    - cloud(certificate: aws, gcp, azure
    - sql
    - mapreduce
    - hadoop
  
- SGD

  

  <img src="https://tva1.sinaimg.cn/large/006tNbRwgy1g9r6jyjvz0j31as07074o.jpg" style="zoom:200%;" />

  > - batch_size: Size of Training Set
  > - epoch: Times that the learning algorithm will work through the entire training dataset
  > - learning rate: The amount that the weights are updated during training. (0.0, 1.0) 



# Advanced

## Transfer learning

- Problem: How can we build a high performing Deep Neural Network model for Image classification with very **less** Data ?

  Solution: Data augmentation and *Transfer Learning* !

- Core of transfer learning: leveraging pre-trained inner layers

  > [Deep Learning For Beginners Using Transfer Learning In Keras](https://towardsdatascience.com/keras-transfer-learning-for-beginners-6c9b8b7143e)

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-063002.jpg)

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-063007.jpg)

- 2 ways 

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-063026.png)

- tips

  - proper base model

    more complex model may need more compute power, and thus more time to get the result.

  - data augmentation

  - Differential Learning rates

  ![](https://ipic-1300911741.oss-cn-shanghai.aliyuncs.com/2020-05-14-063027.png)

