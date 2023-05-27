const Contact = () => {
    return `
    <!-- === contacts section start -->
    <section class="section contact" id="contact">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>Contact Me </h2>
                </div>
            </div>
            <h3 class="contact-title"> Have you any Question ?</h3>
            <h4 class="contact-sub-title">I'M AT YOUR SERVICES</h4>
            <div class="row">
                <!-- == contact item start -->
                <div class="contact-info-item padd-15">
                    <div class="icon"><i class="fa fa-phone"></i></div>
                    <h4>Gọi cho tôi </h4>
                    <p>0981896360</p>
                </div>
                <!-- == contact item end -->
                <!-- == contact item start -->
                <div class="contact-info-item padd-15">
                    <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
                    <h4>Office</h4>
                    <p>Not Yet</p>
                </div>
                <!-- == contact item end -->
                <!-- == contact item start -->
                <div class="contact-info-item padd-15">
                    <div class="icon"><i class="fa fa-envelope"></i></div>
                    <h4>Email</h4>
                    <p>Quagsulu1911@gmail.com</p>
                </div>
                <!-- == contact item end -->
                <!-- == contact item start -->
                <div class="contact-info-item padd-15">
                    <div class="icon"><i class="fa fa-globe-europe"></i></div>
                    <h4>website</h4>
                    <p>quagsulu1911.com</p>
                </div>
                <!-- == contact item end -->
            </div>
            <h3 class="contact-title"> SEND ME AN EMAIL?</h3>
            <h4 class="contact-sub-title">I'M VERY RESPONSIVE TO MESSAGE</h4>
            <!-- === contact Form start -->
            <div class="row">
                <div class="contact-form padd-15">
                    <div class="row">
                        <div class="form-item col-6 padd-15">
                            <div class="form-group">
                                <input type="text" class="form-control " placeholder="Name">
                            </div>
                        </div>
                        <div class="form-item col-6 padd-15">
                            <div class="form-group">
                                <input type="email" class="form-control " placeholder="Email">
                            </div>
                        </div>
                    </div>
                    <!-- col-12 -->
                    <div class="row">
                        <div class="form-item col-12 padd-15">
                            <div class="form-group">
                                <input type="text" class="form-control " placeholder="Subject">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-item col-12 padd-15">
                            <div class="form-group">
                                <!-- <input type="texxt" class="form-control " placeholder="Subject"> -->
                                <textarea name="" class="form-control" cols="30" rows="10"
                                    placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-item col-12 padd-15">
                            <div class="form-group">
                                <button type="submit" class="btn"> Send Message</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- === contact Form end -->
        </div>

    </section>
    <!-- === contacts section end -->
    </div>
    <!-- == Main content End -->
    </div> 
<!-- == main end == -->

    `;
};
export default Contact;