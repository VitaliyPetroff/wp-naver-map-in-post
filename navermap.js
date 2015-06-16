(function() {
    tinymce.create('tinymce.plugins.alghost_navermap', {
        init : function(ed, url){
            ed.addButton('navermap_button', {
                title : 'NaverMap',
                image : url+'icon/map_icon.png',
                onclick: function(){
                    var width = jQuery(window).width(), H = 500, W = 720;
                    tb_show( 'WP Naver Map in Post', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=alghost-navermap' );
                }
            });
        }
    });
    tinymce.PluginManager.add('alghost_navermap', tinymce.plugins.alghost_navermap);

    // executes this when the DOM is ready
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form = jQuery('<div id="alghost-navermap"><table id="navermap-table" class="form-table">\
            <tr>\
				<th><label for="alghost-keyword" colspan="2">주소 입력</label></th>\
            </tr>\
			<tr>\
				<td><input type="text" id="alghost-keyword" name="keyword" style="width:400px;"/><br />\
				<td><input type="button" id="navermap-search" class="button-secondary" name="search" value="Search" /><br />\
			</tr>\
		</table>\
        <ul id="map-list">\
        </ul>\
        <div id="tmpmap-view">\
        </div>\
		<p class="submit">\
			<input type="button" id="navermap-submit" class="button-primary" value="Insert Map" name="submit" disabled=true/>\
		</p>\
		</div>');
		
		var table = form.find('table');
        var keyword = form.find('#alghost-keyword');
        var ul_body = form.find('#map-list');
        var tmpmap_body = form.find('#tmpmap-view');
        var submit_btn = form.find('#navermap-submit');
        
        keyword.focus();
        
        function link_handler(mapx, mapy, title){
            title = title.replace("<b>", "");
            title = title.replace("</b>", "");
            var mapstring = '[navermap title="'+title+'" ';
            mapstring = mapstring + 'mapx="'+mapx+'" ';
            mapstring = mapstring + 'mapy="'+mapy+'" ]';
            tmpmap_body.html("<b>Script: </b>"+mapstring);
            submit_btn.prop('disabled', false);
            submit_btn.focus();
        }
        function return_handler(a, b, c){
            return function(){
                link_handler(a, b, c);
                return false;
            };
        }
		form.appendTo('body').hide();
		form.find('#navermap-search').click(function(){
            jQuery.ajax({
                url: ajaxurl, 
                type:'post',
                data: {
                    action: 'alghost_get_locations_from_keyword',
                    keyword : keyword.val()
                },
                success : function(data){
                    ul_body.html(data);
                    var li_list = ul_body.find('li');

                    for(var i=0; i<li_list.length; i++){
                        var map_args = ul_body.find('#map_'+i).val();
                        var args_array = String(map_args).split('|');

                        ul_body.find('#maplink_'+i).click(return_handler(args_array[0],args_array[1], args_array[2]));
                    };
                },
                error : function(data){
                    alert(data);
                }
            });
        });
        
		// handles the click event of the submit button
		form.find('#navermap-submit').click(function(){
			// inserts the shortcode into the active editor
            var result = tmpmap_body.text().replace("Script: ", "");
			tinyMCE.activeEditor.execCommand('mceInsertContent', false, result);
			
			// closes Thickbox
			tb_remove();
		});
	});   
    
})();
