###
### АСАХИ ХОТХОН 
###

### via Git

	$ git clone https://github.com/morrismn/asahi.git
	$ cd asahi
	$ npm install
	// Хөгжүүлэлт хийх
	$ npm start
	// Production гаргах
	$ npm build
	// task-уудаас сонгох
	$ npm run tasks

# production харах

dist folder доторхийг -> localhost дээрээ хуулж харна.
эсвэл
npm run build:serve   коммандаар production build харна

# хөгжүүлэлт хийх

html format -> src фолдер дотор hbs formataar

src/handlebars фолдер дотор -> header footer svg байрлаж байгаа

src/app фолдер дотор -> javascript file хөгжүүлнэ

src/assets фолдер дотор -> ашиглагдах css scss fonts images хөгжүүлэлт хийнэ


### Ашигласан

HTML
CSS3 - SCSS бэлтгээгүй
JS
SVG - AI drawn & minimized

webpack

# nemelt node_modules

nemelt dotorh folderuudiig node_modules ruu huulna
