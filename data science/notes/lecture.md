

# L 2

- avoid **logical fallacy**(the Texas sharpshooter fallacy): shoot first, then draw target

  ![](https://tva1.sinaimg.cn/large/006y8mN6ly1g6yezkutjuj30z206274i.jpg)



# L 3

- Before convert dataframe to an array, 

  a) Convert object types and string types to category type 

  b) map and convert cateogries of numbers.

- seaborn: dont know how to code on a spot you want? see https://seaborn.pydata.org/examples/index. html#

# L 4

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
  
- ![](https://tva1.sinaimg.cn/large/006y8mN6ly1g7h6z99qn3j30ip0l60uf.jpg)

# L5

- code: 

  - explore underfit model(tune K value)

    train 

  - caculate Confusion matrix, recall, and precision

  - show Receiver Operating Characteristic (ROC) and Area Under the Curve (AUC)



# L6

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
    bagging in random forest
    
    see also [ensemble learning](https://towardsdatascience.com/basic-ensemble-learning-random-forest-adaboost-gradient-boosting-step-by-step-explained-95d49d1e2725)



# L7

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

  ![{\displaystyle R^{2}\equiv 1-{SS_{\rm {res}} \over SS_{\rm {tot}}}\,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0ab5cc13b206a34cc713e153b192f93b685fa875)
  
  > - The total sum of squares (proportional to the variance of the data):
  >   
  >     ![SS_{\text{tot}}=\sum _{i}(y_{i}-{\bar {y}})^{2},](https://wikimedia.org/api/rest_v1/media/math/render/svg/aec2d91094ee54fbf0f7912d329706ff016ec1bd)
  >   
  > - The sum of squares of residuals, also called the residual sum of squares:
  >
  >     ![{\displaystyle SS_{\text{res}}=\sum _{i}(y_{i}-f_{i})^{2}=\sum _{i}e_{i}^{2}\,}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2669c9340581d55b274d3b8ea67a7deb2225510b)
  
  - R^2 range:
    1. R^2 = 0: prediction = mean of actual data
    2. R^2 < 0: prediction worse than mean of actual data
    3. R^2 = 1: prediction = exactly the same as actual data
  



# L8

- neural networks, shallow and deep

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8x6r33ff4j309q06nt8v.jpg)

- classic ML vs. Deep neural networks(DNN)

  **Details:** [intro to DL](https://medium.com/@srnghn/introduction-to-deep-learning-what-do-i-need-to-know-75794ebc4a62)

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8x82drtndj30s80n9dhc.jpg)

  > diff: 
  >
  > DNN transfer the space rather than dataset

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8x91127ckj30sc0nv3zo.jpg)

  

  - Packages/Frameworks![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8x9w1amfsj30vf0ny76q.jpg)

    > The **High bandwidth**, hiding the latency under thread parallelism and **easily programmable** registers makes **GPU** a lot **faster** than a **CPU**.

- DNN

  

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8xb1r5y9mj30tk0o4di9.jpg)

![](https://tva1.sinaimg.cn/large/006y8mN6gy1g8xb8uqgdkj30u20mlmyi.jpg)

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



# L9

[Code](https://github.com/HelperInCa/study/blob/master/data%20science/module9/DNN%20for%20Classification.ipynb)

# L10

<font size="6">Linear algebra in DL</font>

- 1 matrix = 1 layer
- different features = diff dimesions

# L11

<font size="6">The activations | loss functions | SGD of neural networks</font>



- [Activation functions](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)

  - Sigmoid & tanh

    ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9dgxt6aqlj31a70u0ju3.jpg)

  - **ReLU** 

    ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9dgzbhtx9j31bw0hq0uh.jpg)



- [Loss function for DNN: Binary cross entropy](https://towardsdatascience.com/understanding-binary-cross-entropy-log-loss-a-visual-explanation-a3ac6025181a)

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9dizjtxgqj316s0u0afk.jpg)

  

- SGD(the 2nd pic in [this](https://medium.com/@RosieCampbell/demystifying-deep-neural-nets-efb726eae941))

  ![](https://tva1.sinaimg.cn/large/006y8mN6gy1g9djk8fe34j31400u0tcz.jpg)



# L12

<font size="6">CNN theory code</font>

[Paper: Deep Spreadsheets with ExcelNet](https://github.com/HelperInCa/study/blob/master/data science/module12/deepexcelnet.pdf)

[Notebook.xlsx((MNIST))](https://github.com/HelperInCa/study/blob/master/data science/module12/CNN_notebook.xlsx)

- **convolution**: **shrink** the size and **amplify** the signal. so don't conv too many times, or it will be nothing

- **dropout**: avoid overfitting, 0.0 - 0.9

- maxpool

- dense weights

- dense activation

  

[Code (cat or dog)](https://github.com/HelperInCa/study/blob/master/data%20science/module12/CNN%20code.ipynb)



# L13

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

  

  ![](https://tva1.sinaimg.cn/large/006tNbRwgy1g9r6jyjvz0j31as07074o.jpg)

  > - batch_size: Size of Training Set
  > - epoch: Times that the learning algorithm will work through the entire training dataset
  > - learning rate: The amount that the weights are updated during training. (0.0, 1.0) 
