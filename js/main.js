var profilesKey = 'blasphemous2_profiles';

(function($) {
    'use strict';

    var themes = {
        "Standard" : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
        "Cosmo" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cosmo/bootstrap.min.css",
        "Cyborg" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/cyborg/bootstrap.min.css",
        "Darkly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css",
        "Flatly" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/flatly/bootstrap.min.css",
        "Journal" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/journal/bootstrap.min.css",
        "Lumen" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/lumen/bootstrap.min.css",
        "Paper" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/paper/bootstrap.min.css",
        "Readable" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/readable/bootstrap.min.css",
        "Sandstone" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css",
        "Simplex" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/simplex/bootstrap.min.css",
        "Slate" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/slate/bootstrap.min.css",
        "Spacelab" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/spacelab/bootstrap.min.css",
        "Superhero" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/superhero/bootstrap.min.css",
        "United" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/united/bootstrap.min.css",
        "Yeti" : "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/yeti/bootstrap.min.css"
    };

    var profiles = $.jStorage.get(profilesKey, {});

    /// assure default values are set
    /// necessary 'cause we're abusing local storage to store JSON data
    /// done in a more verbose way to be easier to understand
    if (!('current' in profiles)) profiles.current = 'Default Profile';
    if (!(profilesKey in profiles)) profiles[profilesKey] = {};
    initializeProfile(profiles.current);

    jQuery(document).ready(function($) {
        // Get the right style going...
        themeSetup(buildThemeSelection());


        $('ul li').each(function(index) {
            if ($(this).attr('data-id')) {
               addCheckbox(this);
            }  
            
    /*
     * -------------------------
     * CUSTOM MARC
     * -------------------------
     */
            if ($(this).attr('data-rosaireperleimmaculee')) {
                $(this).addClass($(this).attr('data-rosaireperleimmaculee'));
            }
            if ($(this).attr('data-rosairesmallbluewax')) {
                $(this).addClass($(this).attr('data-rosairesmallbluewax'));
            }
            if ($(this).attr('data-rosairemediumbluewax')) {
                $(this).addClass($(this).attr('data-rosairemediumbluewax'));
            }
            if ($(this).attr('data-rosairebigbluewax')) {
                $(this).addClass($(this).attr('data-rosairebigbluewax'));
            }
            if ($(this).attr('data-rosairesmallredwax')) {
                $(this).addClass($(this).attr('data-rosairesmallredwax'));
            }
            if ($(this).attr('data-rosairemediumredwax')) {
                $(this).addClass($(this).attr('data-rosairemediumredwax'));
            }
            if ($(this).attr('data-rosairebigredwax')) {
                $(this).addClass($(this).attr('data-rosairebigredwax'));
            }
            if ($(this).attr('data-rosairepetitorteilgres')) {
                $(this).addClass($(this).attr('data-rosairepetitorteilgres'));
            }
            if ($(this).attr('data-rosairegrosorteilgres')) {
                $(this).addClass($(this).attr('data-rosairegrosorteilgres'));
            }
            if ($(this).attr('data-quetekeyroom')) {
                $(this).addClass($(this).attr('data-quetekeyroom'));
            }
            if ($(this).attr('data_quetegobeletdorevide')) {
                $(this).addClass($(this).attr('data_quetegobeletdorevide'));
            }
            if ($(this).attr('data_quetesainteblessuredescrupule')) {
                $(this).addClass($(this).attr('data_quetesainteblessuredescrupule'));
            }
            if ($(this).attr('data-queteclehautescimes')) {
                $(this).addClass($(this).attr('data-queteclehautescimes'));
            }
            if ($(this).attr('data-quetescapulaireincomplet')) {
                $(this).addClass($(this).attr('data-quetescapulaireincomplet'));
            }
            if ($(this).attr('data-queteetoffelin')) {
                $(this).addClass($(this).attr('data-queteetoffelin'));
            }
            if ($(this).attr('data-quetedepouilletentudia')) {
                $(this).addClass($(this).attr('data-quetedepouilletentudia'));
            }
            if ($(this).attr('data-quetecheveuxtentudia')) {
                $(this).addClass($(this).attr('data-quetecheveuxtentudia'));
            }
            if ($(this).attr('data-data-squelettetentudia')) {
                $(this).addClass($(this).attr('data-data-squelettetentudia'));
            }
            if ($(this).attr('data-quetebouquetthym')) {
                $(this).addClass($(this).attr('data-quetebouquetthym'));
            }
            if ($(this).attr('data-queteencensail')) {
                $(this).addClass($(this).attr('data-queteencensail'));
            }
            if ($(this).attr('data-queteromarin')) {
                $(this).addClass($(this).attr('data-queteromarin'));
            }
            if ($(this).attr('data-quetegirofle')) {
                $(this).addClass($(this).attr('data-quetegirofle'));
            }
            if ($(this).attr('data-data-queteolive')) {
                $(this).addClass($(this).attr('data-data-queteolive'));
            }
            if ($(this).attr('data-data-queteailsuie')) {
                $(this).addClass($(this).attr('data-data-queteailsuie'));
            }
            if ($(this).attr('data-queteoeufdifformite')) {
                $(this).addClass($(this).attr('data-queteoeufdifformite'));
            }
            if ($(this).attr('data-queteoeufdifformiteeclot')) {
                $(this).addClass($(this).attr('data-queteoeufdifformiteeclot'));
            }
            if ($(this).attr('data-quetemaintranchee')) {
                $(this).addClass($(this).attr('data-quetemaintranchee'));
            }
            if ($(this).attr('data-quetemarquerefuge1')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge1'));
            }
            if ($(this).attr('data-quetemarquerefuge2')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge2'));
            }
            if ($(this).attr('data-quetemarquerefuge3')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge3'));
            }
            if ($(this).attr('data-quetesangle')) {
                $(this).addClass($(this).attr('data-quetesangle'));
            }
            if ($(this).attr('data-quetegobeletdorevide')) {
                $(this).addClass($(this).attr('data-quetegobeletdorevide'));
            }
            if ($(this).attr('data-quetesainteblessuredescrupule')) {
                $(this).addClass($(this).attr('data-quetesainteblessuredescrupule'));
            }
            if ($(this).attr('data-rosaireolivegelee')) {
                $(this).addClass($(this).attr('data-rosaireolivegelee'));
            }
            if ($(this).attr('data-quetefleurssechees')) {
                $(this).addClass($(this).attr('data-quetefleurssechees'));
            }
            if ($(this).attr('data-queteclehautescime')) {
                $(this).addClass($(this).attr('data-queteclehautescime'));
            }
            if ($(this).attr('data-quetevoiledeuilnoir')) {
                $(this).addClass($(this).attr('data-quetevoiledeuilnoir'));
            }
            if ($(this).attr('data-queterubannuptial')) {
                $(this).addClass($(this).attr('data-queterubannuptial'));
            }
            if ($(this).attr('data-quetepiecesmetalfondu')) {
                $(this).addClass($(this).attr('data-quetepiecesmetalfondu'));
            }
            if ($(this).attr('data-quetesainteblessurecontrition')) {
                $(this).addClass($(this).attr('data-quetesainteblessurecontrition'));
            }
            if ($(this).attr('data-quetesainteblessureattrition')) {
                $(this).addClass($(this).attr('data-quetesainteblessureattrition'));
            }
            if ($(this).attr('data-quetechalice')) {
                $(this).addClass($(this).attr('data-quetechalice'));
            }
            if ($(this).attr('data-quetecleseculier')) {
                $(this).addClass($(this).attr('data-quetecleseculier'));
            }
            if ($(this).attr('data-quetecleinquisiteur')) {
                $(this).addClass($(this).attr('data-quetecleinquisiteur'));
            }
            if ($(this).attr('data-queteclescribe')) {
                $(this).addClass($(this).attr('data-queteclescribe'));
            }
            if ($(this).attr('data-quetesainteblessureabnegation')) {
                $(this).addClass($(this).attr('data-quetesainteblessureabnegation'));
            }
            if ($(this).attr('data-reliquesang')) {
                $(this).addClass($(this).attr('data-reliquesang'));
            }
            if ($(this).attr('data-reliquelangue')) {
                $(this).addClass($(this).attr('data-reliquelangue'));
            }
            if ($(this).attr('data-reliquelinceul')) {
                $(this).addClass($(this).attr('data-reliquelinceul'));
            }
            if ($(this).attr('data-reliquelinge')) {
                $(this).addClass($(this).attr('data-reliquelinge'));
            }
            if ($(this).attr('data-reliqueongle')) {
                $(this).addClass($(this).attr('data-reliqueongle'));
            }
            if ($(this).attr('data-reliquepoumon')) {
                $(this).addClass($(this).attr('data-reliquepoumon'));
            }
            if ($(this).attr('data-bosswarden')) {
                $(this).addClass($(this).attr('data-bosswarden'));
            }
            if ($(this).attr('data-bosscrisanta')) {
                $(this).addClass($(this).attr('data-bosscrisanta'));
            }
            if ($(this).attr('data-bosstenpiedad')) {
                $(this).addClass($(this).attr('data-bosstenpiedad'));
            }
            if ($(this).attr('data-bossnotredame')) {
                $(this).addClass($(this).attr('data-bossnotredame'));
            }
            if ($(this).attr('data-bosstresangustias')) {
                $(this).addClass($(this).attr('data-bosstresangustias'));
            }
            if ($(this).attr('data-bossesdras')) {
                $(this).addClass($(this).attr('data-bossesdras'));
            }
            if ($(this).attr('data-bossmelquiades')) {
                $(this).addClass($(this).attr('data-bossmelquiades'));
            }
            if ($(this).attr('data-bossisidora')) {
                $(this).addClass($(this).attr('data-bossisidora'));
            }
            if ($(this).attr('data-bossamanecidagoldenblades')) {
                $(this).addClass($(this).attr('data-bossamanecidagoldenblades'));
            }
            if ($(this).attr('data-bossamanecidachiselledsteel')) {
                $(this).addClass($(this).attr('data-bossamanecidachiselledsteel'));
            }
            if ($(this).attr('data-bossamanecidamoltenthorn')) {
                $(this).addClass($(this).attr('data-bossamanecidamoltenthorn'));
            }
            if ($(this).attr('data-bossamanecidabejeweledarrow')) {
                $(this).addClass($(this).attr('data-bossamanecidabejeweledarrow'));
            }
            if ($(this).attr('data-Bosssierpes')) {
                $(this).addClass($(this).attr('data-Bosssierpes'));
            }
            if ($(this).attr('data-bosslaudes')) {
                $(this).addClass($(this).attr('data-bosslaudes'));
            }
            if ($(this).attr('data-bossexposito')) {
                $(this).addClass($(this).attr('data-bossexposito'));
            }
            if ($(this).attr('data-bossquirce')) {
                $(this).addClass($(this).attr('data-bossquirce'));
            }
            if ($(this).attr('data-bossescribar')) {
                $(this).addClass($(this).attr('data-bossescribar'));
            }
            if ($(this).attr('data-challenge1')) {
                $(this).addClass($(this).attr('data-challenge1'));
            }
            if ($(this).attr('data-challenge2')) {
                $(this).addClass($(this).attr('data-challenge2'));
            }
            if ($(this).attr('data-challenge3')) {
                $(this).addClass($(this).attr('data-challenge3'));
            }
            if ($(this).attr('data-challenge4')) {
                $(this).addClass($(this).attr('data-challenge4'));
            }
            if ($(this).attr('data-challenge5')) {
                $(this).addClass($(this).attr('data-challenge5'));
            }
            if ($(this).attr('data-pnjjibrael1')) {
                $(this).addClass($(this).attr('data-pnjjibrael1'));
            }
            if ($(this).attr('data-pnjjibrael2')) {
                $(this).addClass($(this).attr('data-pnjjibrael2'));
            }
            if ($(this).attr('data-pnjjibrael3')) {
                $(this).addClass($(this).attr('data-pnjjibrael3'));
            }
            if ($(this).attr('data-pnjjibrael4')) {
                $(this).addClass($(this).attr('data-pnjjibrael4'));
            }
            if ($(this).attr('data-pnjjibrael5')) {
                $(this).addClass($(this).attr('data-pnjjibrael5'));
            }
            if ($(this).attr('data-confession1')) {
                $(this).addClass($(this).attr('data-confession1'));
            }
            if ($(this).attr('data-confession2')) {
                $(this).addClass($(this).attr('data-confession2'));
            }
            if ($(this).attr('data-confession3')) {
                $(this).addClass($(this).attr('data-confession3'));
            }
            if ($(this).attr('data-confession4')) {
                $(this).addClass($(this).attr('data-confession4'));
            }
            if ($(this).attr('data-confession5')) {
                $(this).addClass($(this).attr('data-confession5'));
            }
            if ($(this).attr('data-confession6')) {
                $(this).addClass($(this).attr('data-confession6'));
            }
            if ($(this).attr('data-confession7')) {
                $(this).addClass($(this).attr('data-confession7'));
            }
        });
        

        // Open external links in new tab
        $("a[href^='http']").attr('target','_blank');

        populateProfiles();

        $('.checkbox input[type="checkbox"]').click(function() {
            var id = $(this).attr('id');
            var isChecked = profiles[profilesKey][profiles.current].checklistData[id] = $(this).prop('checked');
            if (isChecked === true) {
              $('[data-id="'+id+'"] label').addClass('completed');
            } else {
              $('[data-id="'+id+'"] label').removeClass('completed');
            }
            $.jStorage.set(profilesKey, profiles);

    /*
     * -------------------------
     * CUSTOM MARC
     * -------------------------
     */
            if ($(this).parent().parent().parent().attr('data-unlock')) {
                 dataUnlock($(this).parent().parent().parent().attr('data-unlock'),isChecked);    
            }
            
            calculateTotals();
        });

        // Theme callback
        $('#themes').change(function(event) {
            var stylesheet = $('#themes').val();
            themeSetup(stylesheet);
            $.jStorage.set("style", stylesheet);
        });

        $('#profiles').change(function(event) {
            profiles.current = $(this).val();
            $.jStorage.set(profilesKey, profiles);

            $('li .checkbox .completed').show();

            populateChecklists();

            restoreState(profiles.current);

            calculateTotals();
        });

        $('#profileAdd').click(function() {
            $('#profileModalTitle').html('Add Profile');
            $('#profileModalName').val('');
            $('#profileModalAdd').show();
            $('#profileModalUpdate').hide();
            $('#profileModalDelete').hide();
            $('#profileModal').modal('show');
        });

        $('#profileEdit').click(function() {
            $('#profileModalTitle').html('Edit Profile');
            $('#profileModalName').val(profiles.current);
            $('#profileModalAdd').hide();
            $('#profileModalUpdate').show();
            if (canDelete()) {
                $('#profileModalDelete').show();
            } else {
                $('#profileModalDelete').hide();
            }
            $('#profileModal').modal('show');
        });

        $('#profileModalAdd').click(function(event) {
            event.preventDefault();
            var profile = $.trim($('#profileModalName').val());
            if (profile.length > 0) {
                initializeProfile(profile);

                profiles.current = profile;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
                populateChecklists();
                restoreState(profiles.current);
            }
        });

        $('#profileModalUpdate').click(function(event) {
            event.preventDefault();
            var newName = $.trim($('#profileModalName').val());
            if (newName.length > 0 && newName != profiles.current) {
                profiles[profilesKey][newName] = profiles[profilesKey][profiles.current];
                delete profiles[profilesKey][profiles.current];
                profiles.current = newName;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
            }
            $('#profileModal').modal('hide');
        });

        $('#profileModalDelete').click(function(event) {
            event.preventDefault();
            if (!canDelete()) {
                return;
            }
            if (!confirm('Are you sure?')) {
                return;
            }
            delete profiles[profilesKey][profiles.current];
            profiles.current = getFirstProfile();
            $.jStorage.set(profilesKey, profiles);
            populateProfiles();
            populateChecklists();
            restoreState(profiles.current);
            $('#profileModal').modal('hide');
        });

        $('#profileNG\\+').click(function() {
            $('#NG\\+Modal').modal('show');
        });

        $('#NG\\+ModalYes').click(function(event) {
            event.preventDefault();
            if (!confirm('Are you sure you wish to begin the next journey?')) {
                return;
            }
            $('[id^="playthrough_"], [id^="crow_"]').filter(':checked').each(function(){
                profiles[profilesKey][profiles.current].checklistData[this.id] = false;
            });
            $.each(profiles[profilesKey][profiles.current].hidden_categories, function(f){
                profiles[profilesKey][profiles.current].hidden_categories[f] = false;
            });
            if (profiles[profilesKey][profiles.current].journey < 3) {
                profiles[profilesKey][profiles.current].journey++;
            }
            $.jStorage.set(profilesKey, profiles);
            populateChecklists();
            restoreState(profiles.current);
            $('#NG\\+Modal').modal('hide');
        });

        $('#profileExport').click(function(){
            var filename = 'profiles.json';
            var text = JSON.stringify(profiles);
            if (window.Blob && window.navigator.msSaveBlob) {
                // Microsoft browsers (https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/html5/file-api/blob)
                var blob = new window.Blob([text]);
                window.navigator.msSaveBlob(blob, filename);
            } else {
                // All other modern browsers
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        });

        $('#profileImport').click(function(){
          $('#fileInput').trigger('click');
        });
        /* Will reject if an incorrect file or no file is selected */
        $('input#fileInput').change(function(){
          var fileInput = document.getElementById('fileInput');
          if(!fileInput.files || !fileInput.files[0] || !/\.json$/.test(fileInput.files[0].name)){
            alert("Bad input file. File should end in .json")
            return;
          }
          var fr = new FileReader();
          fr.readAsText(fileInput.files[0]);
          fr.onload = dataLoadCallback;
        });

        /*
        *  Import & Export using textarea instead of files
        */
        $('#profileExportText').click(function(){
            document.getElementById("profileText").value = JSON.stringify(profiles);
            document.getElementById("profileText").select();
            document.execCommand("copy");
        });

        $('#profileImportText').click(function(){
            if (!confirm('Are you sure you want to import profile data?')) {
                return;
            }
            try {
                var jsonProfileData = JSON.parse(document.getElementById("profileText").value);
                profiles = jsonProfileData;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
                populateChecklists();
                $('#profiles').trigger("change");
                location.reload();
            } catch(e) {
                alert(e); // error in the above string (in this case, yes)!
            }
        });

        $("#toggleHideCompleted").change(function() {
            // Store information about the old scroll position
            var oldPos = $(window).scrollTop();
            var labels = $('ul>li>div>label:visible:not(.completed)');
            var oldOff = labels.map(function(){return $(this).offset().top});

            var hidden = !$(this).is(':checked');

            $('body').toggleClass('hide_completed', !hidden);

            profiles[profilesKey][profiles.current].hide_completed = !hidden;
            $.jStorage.set(profilesKey, profiles);
            
            // Try to find a reasonable new scroll position
            for (var a=0; a<oldOff.length-1; a++) if (oldOff[a]>oldPos) break;
            for (var b=0; b<oldOff.length-1; b++) if (oldOff[b]>oldPos+$(window).height()) break;
            if (!oldOff.length || $('h2:visible').last().offset().top>oldPos) $('html, body').scrollTop(oldPos);
            else if (a==b) $('html, body').scrollTop(Math.round(labels.eq(b).offset().top)-Math.round($(window).height()/2));
            else {var c = Math.round((a+b)/2); $('html, body').scrollTop(oldPos+Math.round(labels.eq(c).offset().top)-Math.round(oldOff[c]));}
        });

        $('[data-ng-toggle]').change(function() {
            var journey = $(this).data('ng-toggle');

            profiles[profilesKey][profiles.current].journey = +journey
            $.jStorage.set(profilesKey, profiles);

            toggleFilteredClasses('h_ng\\+');
            toggleFilteredClasses('s_ng\\+');
            toggleFilteredClasses('s_ng\\+\\+');

            calculateTotals();
        });

        $('[data-item-toggle]').change(function() {
            var type = $(this).data('item-toggle');
            var to_hide = $(this).is(':checked');
            var item_toggles = $(this).closest('.btn-group.btn-group-vertical').find('[data-item-toggle]');

            profiles[profilesKey][profiles.current].hidden_categories[type] = to_hide;
            $.jStorage.set(profilesKey, profiles);

            toggleFilteredClasses(type);
            toggleFilteredClasses('f_none');

            // Mark parent category as hidden if and only if all items in it are hidden
            if (to_hide === (item_toggles.length === item_toggles.filter(':checked').length)) {
                $(this).closest('.btn-group.btn-group-vertical').find('[data-category-toggle]').not(function(){return this.checked === to_hide}).click();
            }
            // Apply partial highlight to the parent category if at least one item in it is hidden
            $(this).closest('.btn-group.btn-group-vertical').find('.btn-group-vertical').toggleClass('open', item_toggles.filter(':checked').length > 0);

            calculateTotals();
        });

        $('[data-category-toggle]').change(function() {
            var to_hide = $(this).is(':checked');
            var item_toggles = $(this).closest('.btn-group.btn-group-vertical').find('[data-item-toggle]');

            // Change all child items to the same state as the category
            if (to_hide || (item_toggles.length === item_toggles.filter(':checked').length)) {
                item_toggles.not(function(){return this.checked === to_hide}).click();
            }
        });

        calculateTotals();

    });

    function initializeProfile(profile_name) {
        if (!(profile_name in profiles[profilesKey])) profiles[profilesKey][profile_name] = {};
        if (!('checklistData' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].checklistData = {};
        if (!('collapsed' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].collapsed = {};
        if (!('current_tab' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].current_tab = '#tabPlaythrough';
        if (!('hide_completed' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].hide_completed = false;
        if (!('journey' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].journey = 1;
        if (!('hidden_categories' in profiles[profilesKey][profile_name]))
            profiles[profilesKey][profile_name].hidden_categories = {
                f_boss: false,
                f_miss: false,
                f_npc: false,
                f_estus: false,
                f_bone: false,
                f_tome: false,
                f_coal: false,
                f_ash: false,
                f_gest: false,
                f_sorc: false,
                f_pyro: false,
                f_mirac: false,
                f_ring: false,
                f_weap: false,
                f_arm: false,
                f_tit: false,
                f_gem: false,
                f_cov: false,
                f_misc: false
            };
    }

    /// restore all saved state, except for the current tab
    /// used on page load or when switching profiles
    function restoreState(profile_name) {
        $('a[href$="_col"]').each(function() {
            var value = profiles[profilesKey][profile_name].collapsed[$(this).attr('href')];
            var active = $(this).hasClass('collapsed');

            // interesting note: this condition is the same as (value ^ active),
            // but there's no logical xor in JS as far as I know; also, this is more readable
            if ((value && !active) || (!value && active)) {
                $($(this).attr('href')).collapse('toggle');
            }
        });

        var $button = $("#toggleHideCompleted");
        var hide_completed_state = profiles[profilesKey][profile_name].hide_completed;
        var button_active = $button.is(':checked');
        if ((hide_completed_state && !button_active) || (!hide_completed_state && button_active)) {
            $button.click();
        }

        $('[data-ng-toggle="' + profiles[profilesKey][profile_name].journey + '"]').click().change();
        $.each(profiles[profilesKey][profile_name].hidden_categories, function(key, value) {
            var $el = $('[data-item-toggle="' + key + '"]');
            var active = $el.is(':checked');

            if ((value && !active) || (!value && active)) {
                $el.click();
            }
        });
    }

    // Setup ("bootstrap", haha) styling
    function themeSetup(stylesheet) {
        if(stylesheet === null || stylesheet === undefined) { // if we didn't get a param, then
            stylesheet = $.jStorage.get("style") || "Standard"; // fall back on "light" if cookie not set
        }
        $("#bootstrap").attr("href", themes[stylesheet]);
    }

    function buildThemeSelection() {
        var style = $.jStorage.get("style") || "Standard";
        var themeSelect = $("#themes");
        $.each(themes, function(key, value){
            themeSelect.append(
                $('<option></option>').val(key).html(key + " Theme")
            );
        });
        themeSelect.val(style);
        return style;
    }

    function dataLoadCallback(arg){
      var jsonProfileData = JSON.parse(arg.currentTarget.result);
      profiles = jsonProfileData;
      $.jStorage.set(profilesKey, profiles);
      populateProfiles();
      populateChecklists();
      $('#profiles').trigger("change");
      location.reload();
    }

    function populateProfiles() {
        $('#profiles').empty();
        $.each(profiles[profilesKey], function(index, value) {
            $('#profiles').append($("<option></option>").attr('value', index).text(index));
        });
        $('#profiles').val(profiles.current);
    }

    function populateChecklists() {
        $('.checkbox input[type="checkbox"]')
            .prop('checked', false)
            .closest('label')
            .removeClass('completed')
            .closest('li').show();

        $.each(profiles[profilesKey][profiles.current].checklistData, function(index, value) {
            $('#' + index)
                .prop('checked', value)
                .closest('label')
                .toggleClass('completed', value);
        });

        calculateTotals();
    }

    function calculateTotals() {
        $('[id$="_overall_total"]').each(function(index) {
            var type = this.id.match(/(.*)_overall_total/)[1];
            var overallCount = 0, overallChecked = 0;
            $('[id^="' + type + '_totals_"]').each(function(index) {
                var regex = new RegExp(type + '_totals_(.*)');
                var regexFilter = new RegExp('^playthrough_(.*)');
                var i = parseInt(this.id.match(regex)[1]);
                var count = 0, checked = 0;
                for (var j = 1; ; j++) {
                    var checkbox = $('#' + type + '_' + i + '_' + j);
                    if (checkbox.length === 0) {
                        break;
                    }
                    if (checkbox.is(':hidden') && checkbox.prop('id').match(regexFilter) && canFilter(checkbox.closest('li'))) {
                        continue;
                    }
                    count++;
                    overallCount++;
                    if (checkbox.prop('checked')) {
                        checked++;
                        overallChecked++;
                    }
                }
                if (checked === count) {
                    this.innerHTML = $('#' + type + '_nav_totals_' + i)[0].innerHTML = 'DONE';
                    $(this).removeClass('in_progress').addClass('done');
                    $(this).parent('h3').addClass('completed');// Hide heading for completed category
                    $($('#' + type + '_nav_totals_' + i)[0]).removeClass('in_progress').addClass('done');
                } else {
                    this.innerHTML = $('#' + type + '_nav_totals_' + i)[0].innerHTML =  checked + '/' + count;
                    $(this).removeClass('done').addClass('in_progress');
                    $(this).parent('h3').removeClass('completed');// Show heading for not yet completed category
                    $($('#' + type + '_nav_totals_' + i)[0]).removeClass('done').addClass('in_progress');
                }
                $(this).parent('h3').next('div').children('h4').addClass('completed');// Hide all subheadings...
                $(this).parent('h3').next('div').children('ul').children('li').children('div').children('label:not(.completed)').parent('div').parent('li').parent('ul').prev('h4').removeClass('completed');// ... except those where not all entries below the subheading are labeled as completed
            });
            if (overallChecked === overallCount) {
                this.innerHTML = 'DONE';
                $(this).removeClass('in_progress').addClass('done');
            } else {
                this.innerHTML = overallChecked + '/' + overallCount;
                $(this).removeClass('done').addClass('in_progress');
            }
        // Update textarea for profile export
        document.getElementById("profileText").value = JSON.stringify(profiles);
        });
    }

    function addCheckbox(el) {
        var $el = $(el);
        // assuming all content lies on the first line
        var content = $el.html().split('\n')[0];
        var sublists = $el.children('ul');

        content =
            '<div class="checkbox">' +
                '<label>' +
                    '<input type="checkbox" id="' + $el.attr('data-id') + '">' +
                    '<span class="item_content">' + content + '</span>' +
                '</label>' +
            '</div>';

        $el.html(content).append(sublists);

        if (profiles[profilesKey][profiles.current].checklistData[$el.attr('data-id')] === true) {
            $('#' + $el.attr('data-id')).prop('checked', true);
            $('label', $el).addClass('completed');
        }
    }

    function canDelete() {
        var count = 0;
        $.each(profiles[profilesKey], function(index, value) {
            count++;
        });
        return (count > 1);
    }

    function getFirstProfile() {
        for (var profile in profiles[profilesKey]) {
            return profile;
        }
    }

    function canFilter(entry) {
        var classAttr = entry.attr('class');
        if (!classAttr) {
            return false;
        }
        if (classAttr === 'f_none') {
            // If some filters are enabled, all entries marked f_none are automatically filtered as well 
            return Object.values(profiles[profilesKey][profiles.current].hidden_categories).some(function(f){return f});
        }
        var classList = classAttr.split(/\s+/);
        for (var i = 0; i < classList.length; i++) {
            // Hide(h) or show(s) entries based on journey number
            if ((classList[i].match(/^h_ng\+*$/) && classList[i].match(/^h_ng(\+*)$/)[1].length < profiles[profilesKey][profiles.current].journey) ||
               (classList[i].match(/^s_ng\+*$/) && classList[i].match(/^s_ng(\+*)$/)[1].length >= profiles[profilesKey][profiles.current].journey)) {
                return true;
            }
        }
        var foundMatch = 0;
        for (var i = 0; i < classList.length; i++) {
            if (!classList[i].match(/^f_.*/)) {
                continue;
            }
            if(classList[i] in profiles[profilesKey][profiles.current].hidden_categories) {
                if(!profiles[profilesKey][profiles.current].hidden_categories[classList[i]]) {
                    return false;
                }
                foundMatch = 1;
            }
        }
        if (foundMatch === 0) {
            return false;
        }
        return true;
    }

    function toggleFilteredClasses(str) {
        $("li." + str).each(function() {
            if(canFilter($(this))) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', '');
            }
        });
    }
    
    
    /*
     * -------------------------
     * CUSTOM MARC
     * -------------------------
     */
    
    function dataUnlock(dataUnlockValue,isChecked) {
        $("[ "+ dataUnlockValue + "]").each(function() {
            
            if(isChecked) {
                $(this).removeClass(dataUnlockValue);
            } else {
                $(this).addClass(dataUnlockValue);
            } 
        });
    }

    /*
     * -------------------------
     * Back to top functionality
     * -------------------------
     */
    $(function() {
        var offset = 220;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.fadingbutton').fadeIn(duration);
            } else {
                $('.fadingbutton').fadeOut(duration);
            }
        });

        $('.back-to-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    });

    /*
     * ------------------------------------------
     * Restore tabs/hidden sections functionality
     * ------------------------------------------
     */
     $(function() {
        // reset `Hide completed` button state (otherwise Chrome bugs out)
        $('#toggleHideCompleted').attr('checked', false);

        // restore collapsed state on page load
        restoreState(profiles.current);

        if (profiles[profilesKey][profiles.current].current_tab) {
            $('.nav.navbar-nav li a[href="' + profiles[profilesKey][profiles.current].current_tab + '"]').click();
        }

        // register on click handlers to store state
        $('a[href$="_col"]').on('click', function(el) {
            var collapsed_key = $(this).attr('href');
            var saved_tab_state = !!profiles[profilesKey][profiles.current].collapsed[collapsed_key];

            profiles[profilesKey][profiles.current].collapsed[$(this).attr('href')] = !saved_tab_state;

            $.jStorage.set(profilesKey, profiles);
        });

        $('.nav.navbar-nav li a').on('click', function(el) {
            profiles[profilesKey][profiles.current].current_tab = $(this).attr('href');

            $.jStorage.set(profilesKey, profiles);
        });
     });
})( jQuery );

// to color the plus symbol in combined item pickups
$(".p").html('<a style="pointer-events:none">&nbsp;+ </a>');
