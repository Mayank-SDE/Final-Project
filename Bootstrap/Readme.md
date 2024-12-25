# Web Dev Simplified - Complete Bootstrap Crash Course
- You can download the following extensions
  1. HTML CSS Support which gives you the auto completion for all of your css.
  
*  Visit the official website of the bootstrap and take the two cdn of css and js
  1. < link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" >
  2. < script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">< /script  >
* Copy paste it in the .html file inside the head tag.

## What is Bootstrap ?
* Bootstrap are the bunch of classes which we can use to design our page fast and beautiful using the css cdn it provide.
* Using the Bootstrap js cdn we can make things appear, disappear and many interactive features.
* make sure to add the defer attribute in the script cdn of bootstrap so that it works properly. The reason behind this is to make sure that the script is only executed when the HTML document is completely parsed, without blocking the HTML parsing process. This wi particularly useful when working with external scripts, like Bootstrap or other libraries included via CDN.
```html
          <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Page 1</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </head>
    <body>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem dolorum reiciendis voluptas facilis sapiente atque illo ullam rerum? Veniam perferendis ipsa vero est mollitia et eum dolor tenetur eligendi, sint molestiae ab quis commodi aliquid illum dolore qui repellat dolorem quam architecto nihil nobis ut fuga. Nemo cupiditate deleniti, itaque delectus minima accusantium. Sunt doloremque, tenetur esse voluptas tempore nihil sint consectetur? Culpa dolorum, ex quam possimus sint, id fugit odit aliquam sit, odio quasi dolores suscipit officiis alias cumque consequatur magni? Deserunt unde beatae rerum provident sapiente, quae, vero laudantium numquam ex sed dolore a quisquam voluptates praesentium?
    </body>
    </html>
```
* Bootstrap Grid system is broken down into three sections.
  1. container, which wraps your GRID system.
  2. You have rows which are individual rows in your GRID.
  3. You have columns which represents columns in your rows.
  * To represent all of these there 3 different classes.

  ## Container classs
    - This is going to give me the bootstrap container.
    - It adds some padding to the content
    - Based on the screen sizes the styling is going to change. And bootstrap do this for you by using the class provided by the bootstrap.
    - There are these several classes provided by the bootstrap :
      1. container-fluid : The content inside will take the 100% width.
      2. container-lg : applies to the screen sizes greater or equal to the lg size screen.
      3. container-md : applies to the screen sizes greater or equal to the md size screen.
      4. container-sm : applies to the screen sizes greater or equal to the sm size screen.
      5. container-xl : applies to the screen sizes greater or equal to the xl size screen.
      6. container-xxl : applies to the screen sizes greater or equal to the xxl size screen.
    - Try to use the container-md because it will stays fluid for smaller screen i.e which are smaller than md size and get fixed size after the md equal or greater screen.
    - container-fluid takes up the entire width of the parent component no matter what is the size of screen and which is good for smaller screen but not for the larger screen and thus we want the simple container class for larger screen and thus **container-md** is the best choice for the project to have it as class for parent component.

  ## row 
    - by simply assigning the row class to the html tag it becomes row inside the html tag having the container or container-fluid class.
    ## col
      - Inside the row class html tag we can have col class html tags.
      - If there are mutiple col html elements then all the col html element will occupy equal spaces and have equal distance between them.
      - These row and col classes are internally using the flex-box.
      ```html
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page 1</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css"/>
          </head>
          <body>
          <div class="container">
              <div class="row">
                <div class="col">
                  <div class="box"></div>
                </div>
                <div class="col">
                  <div class="box"></div>
                </div><div class="col">
                  <div class="box"></div>
                </div>
                <div class="col">
                  <div class="box"></div>
                </div><div class="col">
                  <div class="box"></div>
                </div>
                <div class="col">
                  <div class="box"></div>
                </div><div class="col">
                  <div class="box"></div>
                </div>
                <div class="col">
                  <div class="box"></div>
                </div>
              </div>
          </div>
          </body>
          </html>
      ```
      - Bootstrap GRID system is also based on a 12 column system.
      - Every single row in bootstrap is having 12 hard-coded column inside.
      - 1/12 of your screen is one column.
      - We can customize the styling in such a way that we can say we want certain html element to occupy the 8 or any number less than equal to 12 of column and rest remaining column to some other html element.
      ```html 
        <div class="container">
          <div class="row">
            <div class="col-6"><div class="box"></div></div>
            <div class="col-3"><div class="box"></div></div>
            <div class="col-1"><div class="box"></div></div>
          </div>
        </div>
      ```
      - If you assign more than 12 column it will adjust all the column width until and unless you define it explicitly and try to fit those column inside the same row as much as possible.
      - If we assign the **col-auto** then it means it will try to take the bare minimum space till the content gets completely fitted.
      - by default the col class will take the available space as much as it can.
      - If we assign col-8 class then that means it will remain same for all the screen sizes.
      - To make it flexible that for lg screen it is different and md screen it is different and sm screen it is different then we can use the **col-lg-4 col-8** Now for the screen greater than equal to the lg screen size it will occupy the 4 columns and for the rest columns it will be occupying the 8 columns.
      - If we are only defining the **col-lg-4** col for screen equal to or greater than lg screen than for the screen sizes less than the lg screen size it will occupy the whole width.

      ### Summary
        * By jsut simply assigning the **col** class. It will occupy the whole space available.
        * **offset-4 col-3** Now the first 4 column space will be skipped and then the column with the space taking of size equal to the 3 column it will take.
        * offset-4 matlab ki 4 column ke jitni space leave karke ap yaha col rakho
    - You can specify the number of column you want in the class of html element where you are defining the row class itself row-cols-2. Now your row is having the two column.
    - You can also specify it based on the screen sizes also let say you want 2 column in a row for smaller screen size and for larger you want 4 columns sizes.
    - **row row-cols-lg-8 row-cols-md-4 row-cols-2** 
    - You can also specify the gap between the rows inside the row class HTML element using the class **gy-2** , **gy-lg-2** etc.
    - The maximum size we can have is **gy-5**.
    - We can also have the gap in the x-axis by using the **gx-2** class.
    - **g-3** is equivalent to the **gx-3** and **gy-3** and it will be assiging the gap in both the direction x-axis as well as y-axis.
    - We can also nest the row inside another row and inside it we will be having columns.
- Everything in the Bootstrap must flow **container** at the top level and **row** somewhere after that and inside that now you can have **col**.

## Table 
- We must start with the container class and then inside it we will be assiging the **table** classs to the table html element.
- **table-primary** class will be used for the table to have the primary blue color.
- **table-danger** class will be used for the table to have the red color.

Note - 
  * There are 8 different colors in bootstrap.
    1. **primary**
    2. **secondary**
    3. **success**
    4. **danger**
    5. **warning**
    6. **info**
    7. **light**
    8. **dark**
- So we can have **table-primary**, **table-secondary**, **table-warning**, **table-info**, **table-danger**, **table-light**, **table-dark**, **table-success**.
- We can assign all these classes to the tr, td, th, thead, tbody tag whereever we want.
- **table-striped** is a class where alternative rows are styled greyish and rest are styled white. We can assign this class to the table tag directly and have the style applied.
- **table-hover** is a class used for having the effect where if we hover over any row then it will change its color or become more darker so that we know in which row we are currently we are pointing to.
- **table-active** is a class which can be assigned to any row so that row bg color changes and it some how looks active.
- **table-bordered** is a class which can be assigned to the table tag which in result applies the border to the table.
- **table-borderless** is a class which can be assigned to the table tag to remove all the border if our table is having.
- **table-sm** will shrink down the table.
- **table-responsive** is a class which can be assigned to html element like < div > tag and this HTML element will wrap up the table html element so that when there are huge number of columns and screen size is small then it will automatically adds up the scroll bar when the screen size gets reduced. This class must be assigned to the parent HTML element of the table html element.
- **table-responsive-lg** is a class which is used when you want responsiveness only till the lg screen size and if the size is equal to the lg screen size or greater then it will not add the scroll bar. 
*  **Only applied to the thead, tbody and tfoot html element**
  * **table-group-divider**
    * If applied to thead then it will add the divider line just above the thead html element.
    * If applied to tbody then it will add the divider line in between the thead and tbody html element.
    * if applied to tfoot then it will add the divider line after the tfoot html element.

## Form
- **form-control** is the class assigned to input html elements where all the input html elements then going to strech to the full width size of parent component. It can also be assigned to the select , textarea html element. It also add the hover and focus effect for better user interaction. Adds padding , border-radius and heights to the input elements.
- **form-label** is the class assigned to all the label html element to proper align it with its corresponding input, select and textarea html element.
- **form-control-sm** and **form-control-lg** are the two variations of **form-control** which are usually smaller and larger then the normal size of the **form-control**.
- It also supports the disabled attribute and readonly attribute of the input html element.
- We can combine the **readonly** attribute and the **form-control-plaintext** which compliments the functionality of **readonly** which means that it will remove the border and do some styling such that the style is also saying that this input field is not for modifying.

- If we are having the input html element if type="color" which is basically a color picker then we must add the additional bootstrap class **form-control-color** so that it can style the color picking section accordingly. Additionaly **form-control** class still be there.

- If we are having the input html element of type="range" then we must remove the form-control class to avoid the borders and add the **form-range** class so that we can have the range input html element.

- If we are having the select html element then we must add the class **form-select** class so that it can style the select html element up to the mark.

- **form-select-sm** and **form-select-lg** are the two variations of the **form-select** class for smaller and larger screen. This will work just fine with the **disabled** attribute.

- If the input element of type = "checkbox" then assign the class **form-check-input** and when dealing with the label of the < input type = "checkbox" > you must assign the **form-check-label** class to the label html input element. Make sure the label html element is after the input html element and both of the html element are inside the parent component let say div which is assigned the class **form-check**

```html
    <div class="form-check form-switch form-check-inline">
        <input type="checkbox" class="form-check-input" id="check"> 
        <label class="form-check-label" for="check"> Email </label>  
    </div>
    
    <div class="form-check form-switch form-check-inline">
        <input type="checkbox" class="form-check-input" id="check"> 
        <label class="form-check-label" for="check"> Email </label>  
    </div>
```
- Fun fact - you can also add the **form-switch** class to the wrapper div html element so that instead of just checking the boxes it gets converted into the switch kind of style.

- If there are multiple boxes and you want those check boxes to be inline with each other then you can add the class **form-check-inline** class to all the wrapper html div element so that all the checkboxes are inline with each other.

Time 29.00