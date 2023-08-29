<template>
    <div class="portfolio-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="portfolio-details-image">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-details-desc">
                        <span v-html="details[0].attributes.longDesc"></span>
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
                    <div class="portfolio-sidebar-sticky">
                        <div class="portfolio-details-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class='bx bx-user-pin'></i>
                                    </div>
                                    <span>Client:</span>
                                    {{ details[0].attributes.client }}
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class='bx bx-map'></i>
                                    </div>
                                    <span>Location:</span>
                                    {{ details[0].attributes.location }}
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class='bx bx-purchase-tag'></i>
                                    </div>
                                    <span>Technologies:</span>
                                    {{ details[0].attributes.technologies }}
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class='bx bx-check'></i>
                                    </div>
                                    <span>Completed:</span>
                                    {{ details[0].attributes.completed }}
                                </li>
                                <li>
                                    <div class="icon">
                                        <i class='bx bx-globe'></i>
                                    </div>
                                    <span>Website:</span>
                                    {{ details[0].attributes.website }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BlogDetails',

    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>