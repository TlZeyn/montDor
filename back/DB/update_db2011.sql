DELIMITER //
CREATE TRIGGER check_rating
BEFORE INSERT
ON t_rating_rtg
FOR EACH ROW
IF (NEW.rtg_rate > 5) 
OR (NEW.rtg_rate < 1)
THEN
SIGNAL SQLSTATE '45OOO'
SET MESSAGE_TEXT = 'The rating must be between 1 and 5';
END IF//


DELIMITER //
CREATE TRIGGER playlist_privileges
BEFORE INSERT
ON t_favorite_fvr
FOR EACH ROW
IF 1 !=
(SELECT usr_rol_id
FROM ts_user_usr
WHERE usr_id = NEW.fvr_usr_id ) 
THEN
SIGNAL SQLSTATE '45OOO'
SET MESSAGE_TEXT = 'Can''t have multiple playlists if not admin';
END IF//

DELIMITER //
CREATE TRIGGER ban_recipe
BEFORE INSERT
ON t_recipe_rcp
FOR EACH ROW
IF 1 !=
(SELECT usr_isBanned
FROM ts_user_usr
WHERE usr_id = NEW.rcp_usr_id ) 
THEN
SIGNAL SQLSTATE '45OOO'
SET MESSAGE_TEXT = 'Can''t post a recipe if banned';
END IF//

DELIMITER //
CREATE TRIGGER ban_comment
BEFORE INSERT
ON `t_comment_cmt`
FOR EACH ROW
IF 1 !=
(SELECT usr_isBanned
FROM ts_user_usr
WHERE usr_id = NEW.cmt_usr_id ) 
THEN
SIGNAL SQLSTATE '45OOO'
SET MESSAGE_TEXT = 'Can''t post a comment if banned';
END IF//

DELIMITER //
CREATE TRIGGER ban_rating
BEFORE INSERT
ON t_rating_rtg
FOR EACH ROW
IF 1 !=
(SELECT usr_isBanned
FROM ts_user_usr
WHERE usr_id = NEW.rtg_usr_id ) 
THEN
SIGNAL SQLSTATE '45OOO'
SET MESSAGE_TEXT = 'Can''t rate a recipe if banned';
END IF//



