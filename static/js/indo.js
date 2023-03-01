  // menu
          $(".menu_close").hide()
          $(".nav-container2").hide()
          $(document).ready(function() {
            $(".menu").on("click", function() {
            $(".nav-container2").show()
            $(".menu").hide()
            $(".menu_close").show()
            $('.products-grid').hide()
            $(".products_btn").show();
            $(".products_close_btn").hide();
          })
          })
          // close button
          $(".menu_close").on("click", function() {
            $(".menu").show()
            $(".nav-container2").hide()
            $(".menu_close").hide()
          })
// products side bar
            $(".products_close_btn").hide()
        $(".products_btn").on("click", function() {
            $('.products-grid').show();
            $(".products_btn").hide();
            $(".products_close_btn").show();
            $(".nav-container2").hide()
            $(".menu").show()
            $(".menu_close").hide()
        })

        $(".products_close_btn").on("click", function() {
            $('.products-grid').hide();
            $(".products_btn").show();
            $(".products_close_btn").hide();
        })

        // Payment process pop up
            $(".modal-body").hide()
            $(".pop_up_1").on("click", function() {
                $(".modal-body").show()
            })
            $(".close_pop_up").on("click", function() {
                $(".modal-body").hide()
            })
        //products drop downs
        $("#l1").on("click", () => {
            $(".pgr_drop").toggleClass("pgr_hide")
         })
         $("#l2").on("click", () => {
            $(".crop_drop").toggleClass("pgr_hide")
         })
         $("#l3").on("click", () => {
            $(".org_drop").toggleClass("pgr_hide")
         })
//////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* products slide show */
    const slide = {
        main : null,
        elementImg : null,
        imgSelected : 0,
        nextSlide: function (){
            if (this.imgSelected != null)
            {
                if (this.imgSelected < (this.elementImg.length - 1))
                {
                    this.imgSelected++;
                    this.normalizeSlide();
                }
            }
        },
        prevSlide: function (){
            if (this.imgSelected != null)
            {
                if (this.imgSelected > 0)
                {
                    this.imgSelected--;
                    this.normalizeSlide();
                }
            }
        },
        normalizeSlide: function (){
    
            for (num = 0; num < this.elementImg.length; num++)
            {
                this.elementImg[num].classList.remove("hideLeft","prevLeftSecond","prev","selected","next","nextRightSecond","hideRight");
            }
    
            this.elementImg[this.imgSelected].classList.add("selected");
    
            if (this.imgSelected > 2)
            {
                this.elementImg[this.imgSelected-2].classList.add("hideLeft");
                this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
                this.elementImg[this.imgSelected-1].classList.add("prev");
            }
            else if (this.imgSelected > 1)
            {
                this.elementImg[this.imgSelected-2].classList.add("prevLeftSecond");
                this.elementImg[this.imgSelected-1].classList.add("prev");
            }
            else if (this.imgSelected > 0)
            {
                this.elementImg[this.imgSelected-1].classList.add("prev");
            }
    
            if ((this.imgSelected + 3) < this.elementImg.length)
            {
                this.elementImg[this.imgSelected+3].classList.add("hideRight");
                this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
                this.elementImg[this.imgSelected+1].classList.add("next");
            }
            else if ((this.imgSelected + 2) < this.elementImg.length)
            {
                this.elementImg[this.imgSelected+2].classList.add("nextRightSecond");
                this.elementImg[this.imgSelected+1].classList.add("next");
            }
            else if((this.imgSelected + 1) < this.elementImg.length)
            {
                this.elementImg[this.imgSelected+1].classList.add("next");
            }
        }
    }
    
    window.onload = () => {
    
        slide.main = document.getElementById("carousel");
        slide.elementImg = slide.main.getElementsByClassName("slideImg");
    
        for (num = 0; num < slide.elementImg.length; num++)
        {
            slide.elementImg[num].setAttribute("img-number", num);
            
            slide.elementImg[num].addEventListener("click", (event) => {
                slide.imgSelected = parseInt(event.target.parentElement.getAttribute("img-number"));
                slide.normalizeSlide();
            });
    
            if (slide.elementImg[num].classList.contains("selected"))
            {
                slide.imgSelected = num;
            }
        }
    
        document.getElementById("prev").addEventListener("click", () => {slide.prevSlide()});
        document.getElementById("next").addEventListener("click", () => {slide.nextSlide()});
    
    }
    // end

    // banners
    var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  }