#Goodreads API Info

##Format of URL GET Request
Note inclusion of API key in URL params
```
https://www.goodreads.com/search.xml?key=HJ3E8sGfQg0TT8KMFDBng&q=Ender%27s+Game
```
##Data Contents
####Useful Data
- year of publication
- title
- author's name
- Image URL (lrg & sml)
- Average ratting

####Missing Data
- ISBN
- Description and/or Summary


##Overall Structure of results
```
<?xml version="1.0" encoding="UTF-8"?>
<GoodreadsResponse>
	<Request>
		<authentication>true</authentication>
		<key>
			<![CDATA[HJ3E8sGfQg0TT8KMFDBng]]>
		</key>
		<method>
			<![CDATA[search_search]]>
		</method>
	</Request>
	<search>
		<query>
			<![CDATA[Ender's+Game]]>
		</query>
		<results-start>1</results-start>
		<results-end>20</results-end>
		<total-results>76312</total-results>
		<source>Goodreads</source>
		<query-time-seconds>0.18</query-time-seconds>
		<results>
```
// results go here...
```
    </results>
  </search>
</GoodreadsResponse>
```



##Individual Result for Each Work (20 results provided in test)
```
<work>
  <id type="integer">2422333</id>
  <books_count type="integer">215</books_count>
  <ratings_count type="integer">828659</ratings_count>
  <text_reviews_count type="integer">36919</text_reviews_count>
  <original_publication_year type="integer">1985</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.29</average_rating>
  <best_book type="Book">
    <id type="integer">375802</id>
    <title>Ender's Game (Ender's Saga, #1)</title>
    <author>
      <id type="integer">589</id>
      <name>Orson Scott Card</name>
    </author>
    <image_url>https://images.gr-assets.com/books/1408303130m/375802.jpg</image_url>
    <small_image_url>https://images.gr-assets.com/books/1408303130s/375802.jpg</small_image_url>
  </best_book>
</work>
```