<template>
    <div class="blog-details-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>
                        <div class="article-content">
                            <span v-html="details[0].attributes.longDesc"></span>
                        </div>
                        <div class="comments-area">
                            <div class="comment-respond">
                                <h3 class="comment-reply-title">Leave a Reply</h3>

                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525"
                                            required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent"
                                            id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this
                                            browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
    name: 'BlogDetails',
    components: {
        BlogSidebar
    },
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>