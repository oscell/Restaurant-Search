# Restaurant Search

## App

Find the app here:
https://oscell.github.io/Restaurant-Search

## Question Answers

### Question 1: Define Records, Indexing and Custom Ranking

Hello George,

Great to see you're interested in understanding the fundamentals.

**Records:**  
In the context of a search engine, records are individual units of data. They have attributes that describe the record in some way. For example, in a product search engine, each product is a record. They might have attributes such as name, price, rating, number of reviews, etc.

**Indexing:**  
An index is where a search engine stores its data. This is like having a table for a database, except an index is optimized for search operations. Indexing is when a search engine creates the index, organizing the information.

**Custom Ranking Metrics:**  
The primary objective of the search is to assist users in finding what they're seeking. To do this, you can rank items in ways that are useful to your users. Common custom ranking attributes include the number of sales, ratings, release date, etc.

Here are some example use cases:

1. **Travel Booking Site**: If users search for "hotels in Paris", the custom ranking displays the hotels with the best user ratings and reviews at the top.

2. **Recipe App**: When users search for "vegetarian recipes", the app shows the most liked vegetarian recipes first.

3. **Job Portal**: If a user types in “software engineer jobs”, the custom ranking presents the listings with the most recent postings at the top.

If you want to read up a bit more, you can see the following resources:

- [What is a Record?](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/what-is-in-a-record/)
- [What is an Index?](https://support.algolia.com/hc/en-us/articles/4406981910289-What-is-an-index-)
- [Custom Ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)

I'll be happy to answer more of your questions.

Regards,

Oscar

### Question 2: Dashboard design feedback

Hello Matt,

Thank you for your feedback on the new dashboard design. Your input is invaluable in enhancing the user experience.

I understand your concerns regarding the additional steps required for clearing and deleting indexes, especially considering the frequency with which you perform these tasks. We will certainly take your feedback into account in our future design updates.

Did you know that you can [delete indices](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api) and also [clear records](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#clear-records-from-an-index-with-the-api) using the API? This approach could allow us to create a function that simplifies the process.

I hope you find this information helpful. Please don't hesitate to reach out if you have any more questions or concerns.

Best regards,
Oscar

### Question 3: High-Level Overview

Hello Leo,

I'd be happy to provide you with more information.

Integrating Algolia into your website involves several key steps. The complexity can vary based on your specific requirements, but we will assist you along the way to make the process as seamless as possible. The high-level process includes:

1. Setting up an Algolia account.
2. Indexing your data: Import your website's data into an Algolia index.
3. Configuring search parameters: Decide which features are important for your search.
4. Integrating search into your website: This involves using the Algolia search API. You can use pre-built widgets or your code. [Algolia has many different integrations](https://www.algolia.com/developers/).
5. Testing: Test the search functionality to ensure it's working correctly.
6. Optimization: Once integrated, you should optimize the experience based on user feedback and analytics by using Algolia's features.

The development work required can range from straightforward to complex, depending on your customization needs.

Let me know if you need any further information, and I'll do my best to assist you.

Regards,

Oscar
