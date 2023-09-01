<template>
    <div class="career-details-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <div class="career-details-desc">
                            <h3>{{ details[0].attributes.title }}</h3>
                            <div class="career-content">
                                <h4>Job Description</h4>
                                <p v-html="details[0].attributes.detailsText"></p>
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
                                    <p class="comment-form-comment">Message
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525"
                                            required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">Name
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">Email
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">Website
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
                            <div class="career-details-image">
                                <!-- <img src="../../assets/images/career-details.jpg" alt="image"> -->

                                <a 
                                    href="javascript:void(0)" 
                                    v-on:click="isPopupMethod(isPopup)" 
                                    class="video-btn popup-youtube"
                                >
                                    <i class="ri-play-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12">
                        <div class="portfolio-sidebar-sticky">
                        <div class="portfolio-details-info">
                                                        <h3>Job Overview</h3>

                            <ul class="list">
                                <li>
                                    <span>Job Position:</span> {{ details[0].attributes.JobPosition }}
                                </li>
                                <li>
                                    <span>Job Location:</span> {{ details[0].attributes.Location }}
                                </li>
                                <li>
                                    <span>Job Status:</span> {{ details[0].attributes.JobStatus }}
                                </li>
                                <li>
                                    <span>Experience:</span> {{ details[0].attributes.Experience }}
                                </li>
                                <li>
                                    <span>EmploymentType:</span> {{ details[0].attributes.EmploymentType }}
                                </li>
                                <li>
                                    <span>WorkMode:</span> {{ details[0].attributes.WorkMode }}
                                </li>
                                <li>
                                    <span>RoleCategory:</span> {{ details[0].attributes.RoleCategory }}
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