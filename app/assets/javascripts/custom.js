(function($){
  $(document).ready(function(){
    $(function(){
      main.init();
      handler.init();
      view.init();
    });

    var main={
      init:function(){
        console.log('main-init');
        this.bootstrap();
      },
      bootstrap:function(){
        $('.carousel').carousel({
          interval: 4000
        });
        // $('.collapse').collapse();
        $('.dropdown-toggle').dropdown();
        $('.delete').alert();
        $('.co-worker').tooltip();
        $('.co-worker .fa').tooltip();
        $('.co-worker-avatar').tooltip();
      }
    };
    var handler={
      panelListingCollapsed:'',
      segmentActive:'',
      init:function(){
        console.log('handler-init');

        $('#projects .panel-document').bind('click',function(){
          $(this).toggleClass('panel-active');
          $(handler.panelListingCollapsed).removeClass('panel-active');
          if(handler.panelListingCollapsed!=this){handler.panelListingCollapsed=this;}else{handler.panelListingCollapsed='';}
        });

        $('.btn-inscription').bind("click",function(){
          // $('.carousel').carousel('pause');
        });
        $('.modal-footer .btn-default').bind("click",function(){
          // $('.carousel').carousel()
        });
        this.heightBar();
      },
      heightBar:function(){
        $(window).resize(function(){
          $('#footer').css('margin-bottom',$('#translation-bar').height());
        });
      }
    };
    var view={
      init:function(){
        console.log('view-init');
        $('#footer').css('margin-bottom',$('#translation-bar').height());
        $('#panel-document-options.visible-lg').css('margin-top',$('#top-document').height());
      }
    }
  });
})
(jQuery);
